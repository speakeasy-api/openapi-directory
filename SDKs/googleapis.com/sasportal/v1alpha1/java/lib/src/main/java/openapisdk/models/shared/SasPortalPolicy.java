package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalPolicy
 * Defines an access control policy to the resources.
**/
public class SasPortalPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignments")
    public SasPortalAssignment[] assignments;
    public SasPortalPolicy withAssignments(SasPortalAssignment[] assignments) {
        this.assignments = assignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public SasPortalPolicy withEtag(String etag) {
        this.etag = etag;
        return this;
    }
}