package openapisdk.models.shared;


public enum FirstAndThirdPartyAudienceAudienceTypeEnum {
    AUDIENCE_TYPE_UNSPECIFIED("AUDIENCE_TYPE_UNSPECIFIED"),
    CUSTOMER_MATCH_CONTACT_INFO("CUSTOMER_MATCH_CONTACT_INFO"),
    CUSTOMER_MATCH_DEVICE_ID("CUSTOMER_MATCH_DEVICE_ID"),
    CUSTOMER_MATCH_USER_ID("CUSTOMER_MATCH_USER_ID"),
    ACTIVITY_BASED("ACTIVITY_BASED"),
    FREQUENCY_CAP("FREQUENCY_CAP"),
    TAG_BASED("TAG_BASED"),
    YOUTUBE_USERS("YOUTUBE_USERS"),
    LICENSED("LICENSED");

    public final String value;

    private FirstAndThirdPartyAudienceAudienceTypeEnum(String value) {
        this.value = value;
    }
}
