import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutSshKeysIdRequestBody extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New name Name to set
     */
    name?: string;
}
export declare class PutSshKeysIdRequest extends SpeakeasyBase {
    requestBody?: PutSshKeysIdRequestBody;
    /**
     * ID of the SSH key
     */
    id: string;
}
export declare class PutSshKeysId200ApplicationJSONSshKey extends SpeakeasyBase {
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Fingerprint of public key
     */
    fingerprint: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Public key
     */
    publicKey: string;
}
/**
 * The `ssh_key` key in the reply contains the modified SSH key object with the new description
 */
export declare class PutSshKeysId200ApplicationJSON extends SpeakeasyBase {
    sshKey: PutSshKeysId200ApplicationJSONSshKey;
}
export declare class PutSshKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `ssh_key` key in the reply contains the modified SSH key object with the new description
     */
    putSshKeysId200ApplicationJSONObject?: PutSshKeysId200ApplicationJSON;
}
