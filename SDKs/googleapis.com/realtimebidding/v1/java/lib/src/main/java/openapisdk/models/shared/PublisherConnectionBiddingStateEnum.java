package openapisdk.models.shared;


public enum PublisherConnectionBiddingStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    REJECTED("REJECTED"),
    APPROVED("APPROVED");

    public final String value;

    private PublisherConnectionBiddingStateEnum(String value) {
        this.value = value;
    }
}
