package openapisdk.models.shared;


public enum OnPremClusterClusterTypeEnum {
    CLUSTERTYPE_UNSPECIFIED("CLUSTERTYPE_UNSPECIFIED"),
    BOOTSTRAP("BOOTSTRAP"),
    HYBRID("HYBRID"),
    STANDALONE("STANDALONE"),
    USER("USER");

    public final String value;

    private OnPremClusterClusterTypeEnum(String value) {
        this.value = value;
    }
}
