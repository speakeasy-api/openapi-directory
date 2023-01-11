package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFunctionVersionListFunctionVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("function_versions")
    public openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersion[] functionVersions;
    public ListFunctionVersionListFunctionVersionResponse withFunctionVersions(openapisdk.models.shared.ServerlessV1ServiceFunctionFunctionVersion[] functionVersions) {
        this.functionVersions = functionVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFunctionVersionListFunctionVersionResponseMeta meta;
    public ListFunctionVersionListFunctionVersionResponse withMeta(ListFunctionVersionListFunctionVersionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}