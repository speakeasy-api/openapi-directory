package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Template data;
    public TemplateResponse withData(Template data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public TemplateResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}