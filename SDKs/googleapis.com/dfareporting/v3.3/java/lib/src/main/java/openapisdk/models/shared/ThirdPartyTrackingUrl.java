package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyTrackingUrl
 * Third-party Tracking URL.
**/
public class ThirdPartyTrackingUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thirdPartyUrlType")
    public ThirdPartyTrackingUrlThirdPartyUrlTypeEnum thirdPartyUrlType;
    public ThirdPartyTrackingUrl withThirdPartyUrlType(ThirdPartyTrackingUrlThirdPartyUrlTypeEnum thirdPartyUrlType) {
        this.thirdPartyUrlType = thirdPartyUrlType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ThirdPartyTrackingUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}