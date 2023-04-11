import { SpeakeasyBase } from "../../../internal/utils";
import { SecretPayload } from "./secretpayload";
/**
 * Response message for SecretManagerService.AccessSecretVersion.
 */
export declare class AccessSecretVersionResponse extends SpeakeasyBase {
    /**
     * The resource name of the SecretVersion in the format `projects/* /secrets/* /versions/*`.
     */
    name?: string;
    /**
     * A secret payload resource in the Secret Manager API. This contains the sensitive secret payload that is associated with a SecretVersion.
     */
    payload?: SecretPayload;
}
