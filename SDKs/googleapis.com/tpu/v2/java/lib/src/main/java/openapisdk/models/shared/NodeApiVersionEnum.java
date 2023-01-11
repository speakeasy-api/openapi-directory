package openapisdk.models.shared;


public enum NodeApiVersionEnum {
    API_VERSION_UNSPECIFIED("API_VERSION_UNSPECIFIED"),
    V1_ALPHA1("V1_ALPHA1"),
    V1("V1"),
    V2_ALPHA1("V2_ALPHA1"),
    V2("V2");

    public final String value;

    private NodeApiVersionEnum(String value) {
        this.value = value;
    }
}
