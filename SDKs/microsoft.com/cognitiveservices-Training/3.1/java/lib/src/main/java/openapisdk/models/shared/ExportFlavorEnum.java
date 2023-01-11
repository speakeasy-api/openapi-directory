package openapisdk.models.shared;


public enum ExportFlavorEnum {
    LINUX("Linux"),
    WINDOWS("Windows"),
    ONNX10("ONNX10"),
    ONNX12("ONNX12"),
    ARM("ARM"),
    TENSOR_FLOW_NORMAL("TensorFlowNormal"),
    TENSOR_FLOW_LITE("TensorFlowLite");

    public final String value;

    private ExportFlavorEnum(String value) {
        this.value = value;
    }
}
