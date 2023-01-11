package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UniversalTwoFactor
 * Security key information specific to the U2F protocol.
**/
public class UniversalTwoFactor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public UniversalTwoFactor withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}