import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Client Credentials Response Model
 */
export declare class ClientCredentialsResponse extends SpeakeasyBase {
    /**
     * The client's secret
     */
    clientSecret?: string;
    /**
     * The client's secret expiration date
     */
    clientSecretExpirationDate?: string;
}
