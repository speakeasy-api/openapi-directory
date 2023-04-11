import { SpeakeasyBase } from "../../../internal/utils";
import { SecretPayload } from "./secretpayload";
/**
 * Request message for SecretManagerService.AddSecretVersion.
 */
export declare class AddSecretVersionRequest extends SpeakeasyBase {
    /**
     * A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.
     */
    payload?: SecretPayload;
}
