package openapisdk.models.operations;


public enum ExportIterationPlatformEnum {
    CORE_ML("CoreML"),
    TENSOR_FLOW("TensorFlow"),
    DOCKER_FILE("DockerFile"),
    ONNX("ONNX");

    public final String value;

    private ExportIterationPlatformEnum(String value) {
        this.value = value;
    }
}
