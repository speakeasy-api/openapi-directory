package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCveCheckConfiguration200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public UpdateCveCheckConfiguration200ApplicationJsonData withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UpdateCveCheckConfiguration200ApplicationJsonData withUrl(String url) {
        this.url = url;
        return this;
    }
}