package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2CloudSqlInstance
 * Represents a specific Cloud SQL instance.
**/
public class GoogleCloudRunV2CloudSqlInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public String[] instances;
    public GoogleCloudRunV2CloudSqlInstance withInstances(String[] instances) {
        this.instances = instances;
        return this;
    }
}