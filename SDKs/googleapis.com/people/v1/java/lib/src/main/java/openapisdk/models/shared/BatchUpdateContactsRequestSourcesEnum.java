package openapisdk.models.shared;


public enum BatchUpdateContactsRequestSourcesEnum {
    READ_SOURCE_TYPE_UNSPECIFIED("READ_SOURCE_TYPE_UNSPECIFIED"),
    READ_SOURCE_TYPE_PROFILE("READ_SOURCE_TYPE_PROFILE"),
    READ_SOURCE_TYPE_CONTACT("READ_SOURCE_TYPE_CONTACT"),
    READ_SOURCE_TYPE_DOMAIN_CONTACT("READ_SOURCE_TYPE_DOMAIN_CONTACT");

    public final String value;

    private BatchUpdateContactsRequestSourcesEnum(String value) {
        this.value = value;
    }
}
