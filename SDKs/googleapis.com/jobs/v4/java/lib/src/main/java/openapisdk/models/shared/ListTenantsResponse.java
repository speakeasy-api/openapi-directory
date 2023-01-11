package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTenantsResponse
 * The List tenants response object.
**/
public class ListTenantsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ResponseMetadata metadata;
    public ListTenantsResponse withMetadata(ResponseMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTenantsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenants")
    public Tenant[] tenants;
    public ListTenantsResponse withTenants(Tenant[] tenants) {
        this.tenants = tenants;
        return this;
    }
}