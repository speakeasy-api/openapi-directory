package openapisdk.models.shared;


public enum ApplicationCreateRequestApplicationTypeEnum {
    NEW_("new"),
    RENEWAL("renewal"),
    UPSELL("upsell");

    public final String value;

    private ApplicationCreateRequestApplicationTypeEnum(String value) {
        this.value = value;
    }
}
