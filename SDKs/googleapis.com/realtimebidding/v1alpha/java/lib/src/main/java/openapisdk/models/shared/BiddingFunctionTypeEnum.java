package openapisdk.models.shared;


public enum BiddingFunctionTypeEnum {
    FUNCTION_TYPE_UNSPECIFIED("FUNCTION_TYPE_UNSPECIFIED"),
    TURTLEDOVE_SIMULATION_BIDDING_FUNCTION("TURTLEDOVE_SIMULATION_BIDDING_FUNCTION"),
    FLEDGE_BIDDING_FUNCTION("FLEDGE_BIDDING_FUNCTION");

    public final String value;

    private BiddingFunctionTypeEnum(String value) {
        this.value = value;
    }
}
