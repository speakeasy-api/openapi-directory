package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BiddingFunctionInput
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
public class BiddingFunctionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biddingFunction")
    public String biddingFunction;
    public BiddingFunctionInput withBiddingFunction(String biddingFunction) {
        this.biddingFunction = biddingFunction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BiddingFunctionInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BiddingFunctionTypeEnum type;
    public BiddingFunctionInput withType(BiddingFunctionTypeEnum type) {
        this.type = type;
        return this;
    }
}