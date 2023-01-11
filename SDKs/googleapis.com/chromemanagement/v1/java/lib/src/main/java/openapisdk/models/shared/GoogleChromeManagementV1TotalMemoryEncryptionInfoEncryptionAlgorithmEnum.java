package openapisdk.models.shared;


public enum GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum {
    MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED("MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED"),
    MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN("MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN"),
    MEMORY_ENCRYPTION_ALGORITHM_AES_XTS128("MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128"),
    MEMORY_ENCRYPTION_ALGORITHM_AES_XTS256("MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256");

    public final String value;

    private GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum(String value) {
        this.value = value;
    }
}
