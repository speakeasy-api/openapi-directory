package openapisdk.models.operations;


public enum CreateProjectTargetExportPlatformsEnum {
    CORE_ML("CoreML"),
    TENSOR_FLOW("TensorFlow"),
    DOCKER_FILE("DockerFile"),
    ONNX("ONNX"),
    VAIDK("VAIDK");

    public final String value;

    private CreateProjectTargetExportPlatformsEnum(String value) {
        this.value = value;
    }
}
