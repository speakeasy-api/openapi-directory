package openapisdk.models.shared;


public enum CreativeHostingSourceEnum {
    HOSTING_SOURCE_UNSPECIFIED("HOSTING_SOURCE_UNSPECIFIED"),
    HOSTING_SOURCE_CM("HOSTING_SOURCE_CM"),
    HOSTING_SOURCE_THIRD_PARTY("HOSTING_SOURCE_THIRD_PARTY"),
    HOSTING_SOURCE_HOSTED("HOSTING_SOURCE_HOSTED"),
    HOSTING_SOURCE_RICH_MEDIA("HOSTING_SOURCE_RICH_MEDIA");

    public final String value;

    private CreativeHostingSourceEnum(String value) {
        this.value = value;
    }
}
