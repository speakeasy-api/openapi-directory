package openapisdk.models.shared;


public enum MavenRepositoryConfigVersionPolicyEnum {
    VERSION_POLICY_UNSPECIFIED("VERSION_POLICY_UNSPECIFIED"),
    RELEASE("RELEASE"),
    SNAPSHOT("SNAPSHOT");

    public final String value;

    private MavenRepositoryConfigVersionPolicyEnum(String value) {
        this.value = value;
    }
}
