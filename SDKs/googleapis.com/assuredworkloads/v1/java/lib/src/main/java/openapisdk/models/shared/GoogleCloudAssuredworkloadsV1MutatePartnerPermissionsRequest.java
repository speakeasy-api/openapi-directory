package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest
 * Request of updating permission settings for a partner workload.
**/
public class GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerPermissions")
    public GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions partnerPermissions;
    public GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest withPartnerPermissions(GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions partnerPermissions) {
        this.partnerPermissions = partnerPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}