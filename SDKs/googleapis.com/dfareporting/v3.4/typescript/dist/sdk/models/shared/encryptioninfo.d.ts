import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
 */
export declare enum EncryptionInfoEncryptionEntityTypeEnum {
    EncryptionEntityTypeUnknown = "ENCRYPTION_ENTITY_TYPE_UNKNOWN",
    DcmAccount = "DCM_ACCOUNT",
    DcmAdvertiser = "DCM_ADVERTISER",
    DbmPartner = "DBM_PARTNER",
    DbmAdvertiser = "DBM_ADVERTISER",
    AdwordsCustomer = "ADWORDS_CUSTOMER",
    DfpNetworkCode = "DFP_NETWORK_CODE"
}
/**
 * Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
 */
export declare enum EncryptionInfoEncryptionSourceEnum {
    EncryptionScopeUnknown = "ENCRYPTION_SCOPE_UNKNOWN",
    AdServing = "AD_SERVING",
    DataTransfer = "DATA_TRANSFER"
}
/**
 * A description of how user IDs are encrypted.
 */
export declare class EncryptionInfo extends SpeakeasyBase {
    /**
     * The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.
     */
    encryptionEntityId?: string;
    /**
     * The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
     */
    encryptionEntityType?: EncryptionInfoEncryptionEntityTypeEnum;
    /**
     * Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
     */
    encryptionSource?: EncryptionInfoEncryptionSourceEnum;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo".
     */
    kind?: string;
}
