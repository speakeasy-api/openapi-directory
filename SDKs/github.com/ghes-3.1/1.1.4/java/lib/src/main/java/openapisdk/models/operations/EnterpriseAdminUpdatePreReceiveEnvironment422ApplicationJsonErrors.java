package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJsonErrors withResource(String resource) {
        this.resource = resource;
        return this;
    }
}