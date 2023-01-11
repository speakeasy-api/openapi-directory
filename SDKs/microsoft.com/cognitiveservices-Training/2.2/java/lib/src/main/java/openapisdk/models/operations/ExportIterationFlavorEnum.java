package openapisdk.models.operations;


public enum ExportIterationFlavorEnum {
    LINUX("Linux"),
    WINDOWS("Windows"),
    ONNX10("ONNX10"),
    ONNX12("ONNX12");

    public final String value;

    private ExportIterationFlavorEnum(String value) {
        this.value = value;
    }
}
