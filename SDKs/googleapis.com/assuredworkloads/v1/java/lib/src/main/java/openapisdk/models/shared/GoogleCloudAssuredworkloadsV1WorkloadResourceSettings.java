package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadResourceSettings
 * Represent the custom settings for the resources to be created.
**/
public class GoogleCloudAssuredworkloadsV1WorkloadResourceSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudAssuredworkloadsV1WorkloadResourceSettings withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public String resourceId;
    public GoogleCloudAssuredworkloadsV1WorkloadResourceSettings withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum resourceType;
    public GoogleCloudAssuredworkloadsV1WorkloadResourceSettings withResourceType(GoogleCloudAssuredworkloadsV1WorkloadResourceSettingsResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}