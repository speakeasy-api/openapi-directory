package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Authority
 * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
**/
public class Authority {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityProvider")
    public String identityProvider;
    public Authority withIdentityProvider(String identityProvider) {
        this.identityProvider = identityProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public Authority withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oidcJwks")
    public String oidcJwks;
    public Authority withOidcJwks(String oidcJwks) {
        this.oidcJwks = oidcJwks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloadIdentityPool")
    public String workloadIdentityPool;
    public Authority withWorkloadIdentityPool(String workloadIdentityPool) {
        this.workloadIdentityPool = workloadIdentityPool;
        return this;
    }
}