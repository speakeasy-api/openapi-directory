package openapisdk.models.shared;


public enum ExportPlatformEnum {
    CORE_ML("CoreML"),
    TENSOR_FLOW("TensorFlow"),
    DOCKER_FILE("DockerFile"),
    ONNX("ONNX"),
    VAIDK("VAIDK");

    public final String value;

    private ExportPlatformEnum(String value) {
        this.value = value;
    }
}
