package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
 * Response for ListDefaultSupportedIdps
**/
public class GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultSupportedIdps")
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[] defaultSupportedIdps;
    public GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse withDefaultSupportedIdps(GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[] defaultSupportedIdps) {
        this.defaultSupportedIdps = defaultSupportedIdps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}