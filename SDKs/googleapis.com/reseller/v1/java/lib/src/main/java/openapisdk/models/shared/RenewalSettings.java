package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RenewalSettings
 * JSON template for a subscription renewal settings.
**/
public class RenewalSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RenewalSettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalType")
    public String renewalType;
    public RenewalSettings withRenewalType(String renewalType) {
        this.renewalType = renewalType;
        return this;
    }
}