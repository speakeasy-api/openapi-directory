import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for SecretManagerService.DisableSecretVersion.
 */
export declare class DisableSecretVersionRequest extends SpeakeasyBase {
    /**
     * Optional. Etag of the SecretVersion. The request succeeds if it matches the etag of the currently stored secret version object. If the etag is omitted, the request succeeds.
     */
    etag?: string;
}
