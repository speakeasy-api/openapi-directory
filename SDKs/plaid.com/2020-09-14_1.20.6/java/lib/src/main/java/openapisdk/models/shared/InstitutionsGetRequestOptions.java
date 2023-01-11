package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstitutionsGetRequestOptions
 * An optional object to filter `/institutions/get` results.
**/
public class InstitutionsGetRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_optional_metadata")
    public Boolean includeOptionalMetadata;
    public InstitutionsGetRequestOptions withIncludeOptionalMetadata(Boolean includeOptionalMetadata) {
        this.includeOptionalMetadata = includeOptionalMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_payment_initiation_metadata")
    public Boolean includePaymentInitiationMetadata;
    public InstitutionsGetRequestOptions withIncludePaymentInitiationMetadata(Boolean includePaymentInitiationMetadata) {
        this.includePaymentInitiationMetadata = includePaymentInitiationMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth")
    public Boolean oauth;
    public InstitutionsGetRequestOptions withOauth(Boolean oauth) {
        this.oauth = oauth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public ProductsEnum[] products;
    public InstitutionsGetRequestOptions withProducts(ProductsEnum[] products) {
        this.products = products;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routing_numbers")
    public String[] routingNumbers;
    public InstitutionsGetRequestOptions withRoutingNumbers(String[] routingNumbers) {
        this.routingNumbers = routingNumbers;
        return this;
    }
}