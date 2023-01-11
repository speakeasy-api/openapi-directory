package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxPublicTokenCreateRequest
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
**/
public class SandboxPublicTokenCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxPublicTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("initial_products")
    public ProductsEnum[] initialProducts;
    public SandboxPublicTokenCreateRequest withInitialProducts(ProductsEnum[] initialProducts) {
        this.initialProducts = initialProducts;
        return this;
    }
    @JsonProperty("institution_id")
    public String institutionId;
    public SandboxPublicTokenCreateRequest withInstitutionId(String institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public SandboxPublicTokenCreateRequestOptions options;
    public SandboxPublicTokenCreateRequest withOptions(SandboxPublicTokenCreateRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxPublicTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}