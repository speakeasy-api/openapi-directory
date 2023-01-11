package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstitutionsGetByIdRequestOptions
 * Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
**/
public class InstitutionsGetByIdRequestOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_optional_metadata")
    public Boolean includeOptionalMetadata;
    public InstitutionsGetByIdRequestOptions withIncludeOptionalMetadata(Boolean includeOptionalMetadata) {
        this.includeOptionalMetadata = includeOptionalMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_payment_initiation_metadata")
    public Boolean includePaymentInitiationMetadata;
    public InstitutionsGetByIdRequestOptions withIncludePaymentInitiationMetadata(Boolean includePaymentInitiationMetadata) {
        this.includePaymentInitiationMetadata = includePaymentInitiationMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_status")
    public Boolean includeStatus;
    public InstitutionsGetByIdRequestOptions withIncludeStatus(Boolean includeStatus) {
        this.includeStatus = includeStatus;
        return this;
    }
}