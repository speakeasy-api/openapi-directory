package openapisdk.models.shared;


public enum ExportFlavorEnum {
    LINUX("Linux"),
    WINDOWS("Windows"),
    ONNX10("ONNX10"),
    ONNX12("ONNX12");

    public final String value;

    private ExportFlavorEnum(String value) {
        this.value = value;
    }
}
