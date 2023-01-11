package openapisdk.models.shared;


public enum CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum {
    CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED("CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED"),
    SCRIPT_BASED("SCRIPT_BASED"),
    ADS_DATA_HUB_BASED("ADS_DATA_HUB_BASED"),
    GOAL_BUILDER_BASED("GOAL_BUILDER_BASED");

    public final String value;

    private CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum(String value) {
        this.value = value;
    }
}
