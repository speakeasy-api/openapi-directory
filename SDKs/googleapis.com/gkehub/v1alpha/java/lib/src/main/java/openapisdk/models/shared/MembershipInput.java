package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MembershipInput
 * Membership contains information about a member cluster.
**/
public class MembershipInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authority")
    public AuthorityInput authority;
    public MembershipInput withAuthority(AuthorityInput authority) {
        this.authority = authority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public MembershipEndpointInput endpoint;
    public MembershipInput withEndpoint(MembershipEndpointInput endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public MembershipInput withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public MembershipInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}