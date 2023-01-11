package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRuntimeEntitySchemasResponse
 * Response message for ConnectorsService.ListRuntimeEntitySchemas.
**/
public class ListRuntimeEntitySchemasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListRuntimeEntitySchemasResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeEntitySchemas")
    public RuntimeEntitySchema[] runtimeEntitySchemas;
    public ListRuntimeEntitySchemasResponse withRuntimeEntitySchemas(RuntimeEntitySchema[] runtimeEntitySchemas) {
        this.runtimeEntitySchemas = runtimeEntitySchemas;
        return this;
    }
}