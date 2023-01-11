package openapisdk.models.shared;


public enum BuildConfigDockerRegistryEnum {
    DOCKER_REGISTRY_UNSPECIFIED("DOCKER_REGISTRY_UNSPECIFIED"),
    CONTAINER_REGISTRY("CONTAINER_REGISTRY"),
    ARTIFACT_REGISTRY("ARTIFACT_REGISTRY");

    public final String value;

    private BuildConfigDockerRegistryEnum(String value) {
        this.value = value;
    }
}
