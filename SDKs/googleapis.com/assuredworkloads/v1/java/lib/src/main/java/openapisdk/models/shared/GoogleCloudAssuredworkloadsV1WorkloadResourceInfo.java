package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadResourceInfo
 * Represent the resources that are children of this Workload.
**/
public class GoogleCloudAssuredworkloadsV1WorkloadResourceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public GoogleCloudAssuredworkloadsV1WorkloadResourceInfo withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum resourceType;
    public GoogleCloudAssuredworkloadsV1WorkloadResourceInfo withResourceType(GoogleCloudAssuredworkloadsV1WorkloadResourceInfoResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}