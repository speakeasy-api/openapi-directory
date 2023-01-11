package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest
 * Request for restricting list of available resources in Workload environment.
**/
public class GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictionType")
    public GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum restrictionType;
    public GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest withRestrictionType(GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum restrictionType) {
        this.restrictionType = restrictionType;
        return this;
    }
}