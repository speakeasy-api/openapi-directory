package openapisdk.models.shared;


public enum BidResponseWithoutBidsStatusRowStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    RESPONSES_WITHOUT_BIDS("RESPONSES_WITHOUT_BIDS"),
    RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT("RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT"),
    RESPONSES_WITHOUT_BIDS_FOR_DEAL("RESPONSES_WITHOUT_BIDS_FOR_DEAL");

    public final String value;

    private BidResponseWithoutBidsStatusRowStatusEnum(String value) {
        this.value = value;
    }
}
