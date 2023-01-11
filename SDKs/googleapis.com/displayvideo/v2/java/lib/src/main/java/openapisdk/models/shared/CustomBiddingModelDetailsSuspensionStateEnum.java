package openapisdk.models.shared;


public enum CustomBiddingModelDetailsSuspensionStateEnum {
    SUSPENSION_STATE_UNSPECIFIED("SUSPENSION_STATE_UNSPECIFIED"),
    SUSPENSION_STATE_ENABLED("SUSPENSION_STATE_ENABLED"),
    SUSPENSION_STATE_DORMANT("SUSPENSION_STATE_DORMANT"),
    SUSPENSION_STATE_SUSPENDED("SUSPENSION_STATE_SUSPENDED");

    public final String value;

    private CustomBiddingModelDetailsSuspensionStateEnum(String value) {
        this.value = value;
    }
}
