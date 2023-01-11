package openapisdk.models.shared;


public enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum {
    OFFERING_UNSPECIFIED("OFFERING_UNSPECIFIED"),
    OFFERING_VAS_BUNDLE("OFFERING_VAS_BUNDLE"),
    OFFERING_VAS_STANDALONE("OFFERING_VAS_STANDALONE"),
    OFFERING_HARD_BUNDLE("OFFERING_HARD_BUNDLE"),
    OFFERING_SOFT_BUNDLE("OFFERING_SOFT_BUNDLE");

    public final String value;

    private GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum(String value) {
        this.value = value;
    }
}
