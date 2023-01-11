package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CallbackResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Project data;
    public CallbackResult withData(Project data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public CallbackResult withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ProjectStatusEnum type;
    public CallbackResult withType(ProjectStatusEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CallbackResult withUrl(String url) {
        this.url = url;
        return this;
    }
}