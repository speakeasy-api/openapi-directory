import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
 */
export declare class UpdateCryptoKeyPrimaryVersionRequest extends SpeakeasyBase {
    /**
     * Required. The id of the child CryptoKeyVersion to use as primary.
     */
    cryptoKeyVersionId?: string;
}
