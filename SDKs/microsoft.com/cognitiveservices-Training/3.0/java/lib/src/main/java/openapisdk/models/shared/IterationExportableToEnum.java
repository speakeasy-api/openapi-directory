package openapisdk.models.shared;


public enum IterationExportableToEnum {
    CORE_ML("CoreML"),
    TENSOR_FLOW("TensorFlow"),
    DOCKER_FILE("DockerFile"),
    ONNX("ONNX"),
    VAIDK("VAIDK");

    public final String value;

    private IterationExportableToEnum(String value) {
        this.value = value;
    }
}
