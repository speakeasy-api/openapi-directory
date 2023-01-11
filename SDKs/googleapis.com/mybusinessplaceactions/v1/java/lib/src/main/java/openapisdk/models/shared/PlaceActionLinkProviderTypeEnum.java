package openapisdk.models.shared;


public enum PlaceActionLinkProviderTypeEnum {
    PROVIDER_TYPE_UNSPECIFIED("PROVIDER_TYPE_UNSPECIFIED"),
    MERCHANT("MERCHANT"),
    AGGREGATOR3_P("AGGREGATOR_3P");

    public final String value;

    private PlaceActionLinkProviderTypeEnum(String value) {
        this.value = value;
    }
}
