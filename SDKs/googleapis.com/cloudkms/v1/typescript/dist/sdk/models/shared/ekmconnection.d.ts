import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceResolver, ServiceResolverInput } from "./serviceresolver";
/**
 * Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.
 */
export declare enum EkmConnectionKeyManagementModeEnum {
    KeyManagementModeUnspecified = "KEY_MANAGEMENT_MODE_UNSPECIFIED",
    Manual = "MANUAL",
    CloudKms = "CLOUD_KMS"
}
/**
 * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
 */
export declare class EkmConnection extends SpeakeasyBase {
    /**
     * Output only. The time at which the EkmConnection was created.
     */
    createTime?: string;
    /**
     * Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.
     */
    cryptoSpacePath?: string;
    /**
     * Optional. Etag of the currently stored EkmConnection.
     */
    etag?: string;
    /**
     * Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.
     */
    keyManagementMode?: EkmConnectionKeyManagementModeEnum;
    /**
     * Output only. The resource name for the EkmConnection in the format `projects/* /locations/* /ekmConnections/*`.
     */
    name?: string;
    /**
     * A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.
     */
    serviceResolvers?: ServiceResolver[];
}
/**
 * An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.
 */
export declare class EkmConnectionInput extends SpeakeasyBase {
    /**
     * Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.
     */
    cryptoSpacePath?: string;
    /**
     * Optional. Etag of the currently stored EkmConnection.
     */
    etag?: string;
    /**
     * Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.
     */
    keyManagementMode?: EkmConnectionKeyManagementModeEnum;
    /**
     * A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.
     */
    serviceResolvers?: ServiceResolverInput[];
}
