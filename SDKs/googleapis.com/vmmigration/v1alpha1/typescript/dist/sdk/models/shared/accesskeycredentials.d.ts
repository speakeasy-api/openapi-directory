import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message describing AWS Credentials using access key id and secret.
 */
export declare class AccessKeyCredentials extends SpeakeasyBase {
    /**
     * AWS access key ID.
     */
    accessKeyId?: string;
    /**
     * Input only. AWS secret access key.
     */
    secretAccessKey?: string;
    /**
     * Input only. AWS session token. Used only when AWS security token service (STS) is responsible for creating the temporary credentials.
     */
    sessionToken?: string;
}
