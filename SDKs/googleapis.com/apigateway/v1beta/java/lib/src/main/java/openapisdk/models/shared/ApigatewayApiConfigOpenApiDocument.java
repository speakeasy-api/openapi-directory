package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApigatewayApiConfigOpenApiDocument
 * An OpenAPI Specification Document describing an API.
**/
public class ApigatewayApiConfigOpenApiDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public ApigatewayApiConfigFile document;
    public ApigatewayApiConfigOpenApiDocument withDocument(ApigatewayApiConfigFile document) {
        this.document = document;
        return this;
    }
}