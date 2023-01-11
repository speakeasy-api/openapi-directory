package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
 * Response message for ListTenants.
**/
public class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenants")
    public GoogleCloudIdentitytoolkitAdminV2Tenant[] tenants;
    public GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse withTenants(GoogleCloudIdentitytoolkitAdminV2Tenant[] tenants) {
        this.tenants = tenants;
        return this;
    }
}