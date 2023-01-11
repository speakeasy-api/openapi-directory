package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasourceRunParameters
 * Parameters to configure when the data source is fetched to update node properties.
**/
public class DatasourceRunParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onGeneration")
    public Boolean onGeneration;
    public DatasourceRunParameters withOnGeneration(Boolean onGeneration) {
        this.onGeneration = onGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onNewNode")
    public Boolean onNewNode;
    public DatasourceRunParameters withOnNewNode(Boolean onNewNode) {
        this.onNewNode = onNewNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public DatasourceRunParametersSchedule schedule;
    public DatasourceRunParameters withSchedule(DatasourceRunParametersSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
}