package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListActivityListActivityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activities")
    public openapisdk.models.shared.TaskrouterV1WorkspaceActivity[] activities;
    public ListActivityListActivityResponse withActivities(openapisdk.models.shared.TaskrouterV1WorkspaceActivity[] activities) {
        this.activities = activities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListActivityListActivityResponseMeta meta;
    public ListActivityListActivityResponse withMeta(ListActivityListActivityResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}