package openapisdk.models.shared;


public enum ExportPlatformEnum {
    CORE_ML("CoreML"),
    TENSOR_FLOW("TensorFlow");

    public final String value;

    private ExportPlatformEnum(String value) {
        this.value = value;
    }
}
