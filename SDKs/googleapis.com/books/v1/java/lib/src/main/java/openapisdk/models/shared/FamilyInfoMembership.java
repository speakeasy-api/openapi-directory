package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FamilyInfoMembership
 * Family membership info of the user that made the request.
**/
public class FamilyInfoMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acquirePermission")
    public String acquirePermission;
    public FamilyInfoMembership withAcquirePermission(String acquirePermission) {
        this.acquirePermission = acquirePermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageGroup")
    public String ageGroup;
    public FamilyInfoMembership withAgeGroup(String ageGroup) {
        this.ageGroup = ageGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedMaturityRating")
    public String allowedMaturityRating;
    public FamilyInfoMembership withAllowedMaturityRating(String allowedMaturityRating) {
        this.allowedMaturityRating = allowedMaturityRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isInFamily")
    public Boolean isInFamily;
    public FamilyInfoMembership withIsInFamily(Boolean isInFamily) {
        this.isInFamily = isInFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public String role;
    public FamilyInfoMembership withRole(String role) {
        this.role = role;
        return this;
    }
}