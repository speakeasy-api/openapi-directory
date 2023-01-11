package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipRole1
 * A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
**/
public class MembershipRole1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryDetail")
    public ExpiryDetail expiryDetail;
    public MembershipRole1 withExpiryDetail(ExpiryDetail expiryDetail) {
        this.expiryDetail = expiryDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MembershipRole1 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictionEvaluations")
    public RestrictionEvaluations restrictionEvaluations;
    public MembershipRole1 withRestrictionEvaluations(RestrictionEvaluations restrictionEvaluations) {
        this.restrictionEvaluations = restrictionEvaluations;
        return this;
    }
}