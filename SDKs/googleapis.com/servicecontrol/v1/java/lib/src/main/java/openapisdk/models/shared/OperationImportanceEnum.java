package openapisdk.models.shared;


public enum OperationImportanceEnum {
    LOW("LOW"),
    HIGH("HIGH"),
    DEBUG("DEBUG");

    public final String value;

    private OperationImportanceEnum(String value) {
        this.value = value;
    }
}
