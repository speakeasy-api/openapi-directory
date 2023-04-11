import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
 */
export declare class GoogleCloudKmsV1ExternalProtectionLevelOptions extends SpeakeasyBase {
    /**
     * The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection.
     */
    ekmConnectionKeyPath?: string;
    /**
     * The URI for an external resource that this CryptoKeyVersion represents.
     */
    externalKeyUri?: string;
}
