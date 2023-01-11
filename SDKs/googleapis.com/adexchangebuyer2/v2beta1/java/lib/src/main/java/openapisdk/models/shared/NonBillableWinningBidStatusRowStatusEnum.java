package openapisdk.models.shared;


public enum NonBillableWinningBidStatusRowStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    AD_NOT_RENDERED("AD_NOT_RENDERED"),
    INVALID_IMPRESSION("INVALID_IMPRESSION"),
    FATAL_VAST_ERROR("FATAL_VAST_ERROR"),
    LOST_IN_MEDIATION("LOST_IN_MEDIATION");

    public final String value;

    private NonBillableWinningBidStatusRowStatusEnum(String value) {
        this.value = value;
    }
}
