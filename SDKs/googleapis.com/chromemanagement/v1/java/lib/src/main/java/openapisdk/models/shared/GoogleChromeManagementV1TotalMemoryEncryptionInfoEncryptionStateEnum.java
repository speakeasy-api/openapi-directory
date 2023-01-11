package openapisdk.models.shared;


public enum GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum {
    MEMORY_ENCRYPTION_STATE_UNSPECIFIED("MEMORY_ENCRYPTION_STATE_UNSPECIFIED"),
    MEMORY_ENCRYPTION_STATE_UNKNOWN("MEMORY_ENCRYPTION_STATE_UNKNOWN"),
    MEMORY_ENCRYPTION_STATE_DISABLED("MEMORY_ENCRYPTION_STATE_DISABLED"),
    MEMORY_ENCRYPTION_STATE_TME("MEMORY_ENCRYPTION_STATE_TME"),
    MEMORY_ENCRYPTION_STATE_MKTME("MEMORY_ENCRYPTION_STATE_MKTME");

    public final String value;

    private GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum(String value) {
        this.value = value;
    }
}
