package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstitutionsSearchRequestOptions
 * An optional object to filter `/institutions/search` results.
**/
public class InstitutionsSearchRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_optional_metadata")
    public Boolean includeOptionalMetadata;
    public InstitutionsSearchRequestOptions withIncludeOptionalMetadata(Boolean includeOptionalMetadata) {
        this.includeOptionalMetadata = includeOptionalMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_payment_initiation_metadata")
    public Boolean includePaymentInitiationMetadata;
    public InstitutionsSearchRequestOptions withIncludePaymentInitiationMetadata(Boolean includePaymentInitiationMetadata) {
        this.includePaymentInitiationMetadata = includePaymentInitiationMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth")
    public Boolean oauth;
    public InstitutionsSearchRequestOptions withOauth(Boolean oauth) {
        this.oauth = oauth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_initiation")
    public java.util.Map<String, Object> paymentInitiation;
    public InstitutionsSearchRequestOptions withPaymentInitiation(java.util.Map<String, Object> paymentInitiation) {
        this.paymentInitiation = paymentInitiation;
        return this;
    }
}