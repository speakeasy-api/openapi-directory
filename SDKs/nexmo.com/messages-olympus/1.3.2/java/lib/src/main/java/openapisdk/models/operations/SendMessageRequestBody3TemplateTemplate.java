package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessageRequestBody3TemplateTemplate {
    @JsonProperty("name")
    public String name;
    public SendMessageRequestBody3TemplateTemplate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public String[] parameters;
    public SendMessageRequestBody3TemplateTemplate withParameters(String[] parameters) {
        this.parameters = parameters;
        return this;
    }
}