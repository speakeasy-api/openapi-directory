package openapisdk.models.shared;


public enum ProjectSettingsTargetExportPlatformsEnum {
    CORE_ML("CoreML"),
    TENSOR_FLOW("TensorFlow"),
    DOCKER_FILE("DockerFile"),
    ONNX("ONNX"),
    VAIDK("VAIDK");

    public final String value;

    private ProjectSettingsTargetExportPlatformsEnum(String value) {
        this.value = value;
    }
}
