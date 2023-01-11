package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BiddingFunction
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
public class BiddingFunction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biddingFunction")
    public String biddingFunction;
    public BiddingFunction withBiddingFunction(String biddingFunction) {
        this.biddingFunction = biddingFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BiddingFunction withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public BiddingFunctionStateEnum state;
    public BiddingFunction withState(BiddingFunctionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BiddingFunctionTypeEnum type;
    public BiddingFunction withType(BiddingFunctionTypeEnum type) {
        this.type = type;
        return this;
    }
}