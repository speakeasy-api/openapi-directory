package openapisdk.models.shared;


public enum ClientEntityTypeEnum {
    ENTITY_TYPE_UNSPECIFIED("ENTITY_TYPE_UNSPECIFIED"),
    ADVERTISER("ADVERTISER"),
    BRAND("BRAND"),
    AGENCY("AGENCY"),
    ENTITY_TYPE_UNCLASSIFIED("ENTITY_TYPE_UNCLASSIFIED");

    public final String value;

    private ClientEntityTypeEnum(String value) {
        this.value = value;
    }
}
