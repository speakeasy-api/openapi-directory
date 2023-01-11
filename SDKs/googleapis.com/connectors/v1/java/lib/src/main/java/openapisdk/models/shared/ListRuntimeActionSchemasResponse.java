package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRuntimeActionSchemasResponse
 * Response message for ConnectorsService.ListRuntimeActionSchemas.
**/
public class ListRuntimeActionSchemasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRuntimeActionSchemasResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeActionSchemas")
    public RuntimeActionSchema[] runtimeActionSchemas;
    public ListRuntimeActionSchemasResponse withRuntimeActionSchemas(RuntimeActionSchema[] runtimeActionSchemas) {
        this.runtimeActionSchemas = runtimeActionSchemas;
        return this;
    }
}