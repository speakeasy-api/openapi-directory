package openapisdk.models.shared;


public enum SourceTypeEnum {
    SOURCE_TYPE_UNSPECIFIED("SOURCE_TYPE_UNSPECIFIED"),
    ACCOUNT("ACCOUNT"),
    PROFILE("PROFILE"),
    DOMAIN_PROFILE("DOMAIN_PROFILE"),
    CONTACT("CONTACT"),
    OTHER_CONTACT("OTHER_CONTACT"),
    DOMAIN_CONTACT("DOMAIN_CONTACT");

    public final String value;

    private SourceTypeEnum(String value) {
        this.value = value;
    }
}
