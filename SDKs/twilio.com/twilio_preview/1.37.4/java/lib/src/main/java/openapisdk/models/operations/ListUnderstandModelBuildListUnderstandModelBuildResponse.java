package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandModelBuildListUnderstandModelBuildResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandModelBuildListUnderstandModelBuildResponseMeta meta;
    public ListUnderstandModelBuildListUnderstandModelBuildResponse withMeta(ListUnderstandModelBuildListUnderstandModelBuildResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_builds")
    public openapisdk.models.shared.PreviewUnderstandAssistantModelBuild[] modelBuilds;
    public ListUnderstandModelBuildListUnderstandModelBuildResponse withModelBuilds(openapisdk.models.shared.PreviewUnderstandAssistantModelBuild[] modelBuilds) {
        this.modelBuilds = modelBuilds;
        return this;
    }
}