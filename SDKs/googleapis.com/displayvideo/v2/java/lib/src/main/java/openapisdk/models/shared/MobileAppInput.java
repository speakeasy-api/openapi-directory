package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileAppInput
 * A mobile app promoted by a mobile app install line item.
**/
public class MobileAppInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public MobileAppInput withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}