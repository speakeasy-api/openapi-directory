package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayCodePayCodeNominalCode
 * The pay codes' nominal code
**/
public class PayCodePayCodeNominalCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public PayCodePayCodeNominalCode withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public PayCodePayCodeNominalCode withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public PayCodePayCodeNominalCode withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}