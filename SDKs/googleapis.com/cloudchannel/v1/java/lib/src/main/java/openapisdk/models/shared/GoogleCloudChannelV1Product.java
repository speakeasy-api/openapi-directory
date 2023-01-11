package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Product
 * A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.
**/
public class GoogleCloudChannelV1Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketingInfo")
    public GoogleCloudChannelV1MarketingInfo marketingInfo;
    public GoogleCloudChannelV1Product withMarketingInfo(GoogleCloudChannelV1MarketingInfo marketingInfo) {
        this.marketingInfo = marketingInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudChannelV1Product withName(String name) {
        this.name = name;
        return this;
    }
}