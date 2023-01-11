package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetValidity200ApplicationJson
 * The basic response containing the unique ID of the request and the response status
**/
public class GetValidity200ApplicationJson {
    @JsonProperty("data")
    public GetValidity200ApplicationJsonData data;
    public GetValidity200ApplicationJson withData(GetValidity200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("meta")
    public GetValidity200ApplicationJsonMeta meta;
    public GetValidity200ApplicationJson withMeta(GetValidity200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}