package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClearOrgPolicyRequest
 * The request sent to the ClearOrgPolicy method.
**/
public class ClearOrgPolicyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("constraint")
    public String constraint;
    public ClearOrgPolicyRequest withConstraint(String constraint) {
        this.constraint = constraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ClearOrgPolicyRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}