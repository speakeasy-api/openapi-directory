package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1MarketingInfo
 * Represents the marketing information for a Product, SKU or Offer.
**/
public class GoogleCloudChannelV1MarketingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLogo")
    public GoogleCloudChannelV1Media defaultLogo;
    public GoogleCloudChannelV1MarketingInfo withDefaultLogo(GoogleCloudChannelV1Media defaultLogo) {
        this.defaultLogo = defaultLogo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudChannelV1MarketingInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudChannelV1MarketingInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}