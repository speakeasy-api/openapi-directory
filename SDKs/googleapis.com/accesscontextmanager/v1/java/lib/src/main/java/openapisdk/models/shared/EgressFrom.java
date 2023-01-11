package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EgressFrom
 * Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
**/
public class EgressFrom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identities")
    public String[] identities;
    public EgressFrom withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityType")
    public EgressFromIdentityTypeEnum identityType;
    public EgressFrom withIdentityType(EgressFromIdentityTypeEnum identityType) {
        this.identityType = identityType;
        return this;
    }
}