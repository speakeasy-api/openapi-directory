package openapisdk.models.shared;


public enum EncryptionInfoEncryptionEntityTypeEnum {
    ENCRYPTION_ENTITY_TYPE_UNKNOWN("ENCRYPTION_ENTITY_TYPE_UNKNOWN"),
    DCM_ACCOUNT("DCM_ACCOUNT"),
    DCM_ADVERTISER("DCM_ADVERTISER"),
    DBM_PARTNER("DBM_PARTNER"),
    DBM_ADVERTISER("DBM_ADVERTISER"),
    ADWORDS_CUSTOMER("ADWORDS_CUSTOMER"),
    DFP_NETWORK_CODE("DFP_NETWORK_CODE");

    public final String value;

    private EncryptionInfoEncryptionEntityTypeEnum(String value) {
        this.value = value;
    }
}
