package openapisdk.models.shared;


public enum GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum {
    CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED("CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED"),
    INVITED("INVITED"),
    ACTIVE("ACTIVE"),
    REVOKED("REVOKED"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private GoogleCloudChannelV1ChannelPartnerLinkLinkStateEnum(String value) {
        this.value = value;
    }
}
