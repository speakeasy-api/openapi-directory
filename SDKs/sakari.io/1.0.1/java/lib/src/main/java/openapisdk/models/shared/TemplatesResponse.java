package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Template[] data;
    public TemplatesResponse withData(Template[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public TemplatesResponseError error;
    public TemplatesResponse withError(TemplatesResponseError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public TemplatesResponsePagination pagination;
    public TemplatesResponse withPagination(TemplatesResponsePagination pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public TemplatesResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}