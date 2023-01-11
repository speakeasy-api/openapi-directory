package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssuanceModes
 * IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
**/
public class IssuanceModes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowConfigBasedIssuance")
    public Boolean allowConfigBasedIssuance;
    public IssuanceModes withAllowConfigBasedIssuance(Boolean allowConfigBasedIssuance) {
        this.allowConfigBasedIssuance = allowConfigBasedIssuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowCsrBasedIssuance")
    public Boolean allowCsrBasedIssuance;
    public IssuanceModes withAllowCsrBasedIssuance(Boolean allowCsrBasedIssuance) {
        this.allowCsrBasedIssuance = allowCsrBasedIssuance;
        return this;
    }
}