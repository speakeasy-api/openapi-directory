package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListModelBuildListModelBuildResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListModelBuildListModelBuildResponseMeta meta;
    public ListModelBuildListModelBuildResponse withMeta(ListModelBuildListModelBuildResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_builds")
    public openapisdk.models.shared.AutopilotV1AssistantModelBuild[] modelBuilds;
    public ListModelBuildListModelBuildResponse withModelBuilds(openapisdk.models.shared.AutopilotV1AssistantModelBuild[] modelBuilds) {
        this.modelBuilds = modelBuilds;
        return this;
    }
}