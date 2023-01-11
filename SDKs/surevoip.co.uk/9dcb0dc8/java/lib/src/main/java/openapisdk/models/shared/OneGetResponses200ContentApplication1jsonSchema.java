package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OneGetResponses200ContentApplication1jsonSchemaStatusEnum status;
    public OneGetResponses200ContentApplication1jsonSchema withStatus(OneGetResponses200ContentApplication1jsonSchemaStatusEnum status) {
        this.status = status;
        return this;
    }
}