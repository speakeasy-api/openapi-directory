package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBuildListBuildResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builds")
    public openapisdk.models.shared.ServerlessV1ServiceBuild[] builds;
    public ListBuildListBuildResponse withBuilds(openapisdk.models.shared.ServerlessV1ServiceBuild[] builds) {
        this.builds = builds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBuildListBuildResponseMeta meta;
    public ListBuildListBuildResponse withMeta(ListBuildListBuildResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}