package openapisdk.models.shared;


public enum BatchCreateContactsRequestSourcesEnum {
    READ_SOURCE_TYPE_UNSPECIFIED("READ_SOURCE_TYPE_UNSPECIFIED"),
    READ_SOURCE_TYPE_PROFILE("READ_SOURCE_TYPE_PROFILE"),
    READ_SOURCE_TYPE_CONTACT("READ_SOURCE_TYPE_CONTACT"),
    READ_SOURCE_TYPE_DOMAIN_CONTACT("READ_SOURCE_TYPE_DOMAIN_CONTACT");

    public final String value;

    private BatchCreateContactsRequestSourcesEnum(String value) {
        this.value = value;
    }
}
