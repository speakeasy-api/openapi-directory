package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestedScopes
 * Scope of required and optional account features or content from a ConnectedApplication.
**/
public class RequestedScopes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_filters")
    public AccountFilter accountFilters;
    public RequestedScopes withAccountFilters(AccountFilter accountFilters) {
        this.accountFilters = accountFilters;
        return this;
    }
    @JsonProperty("account_selection_cardinality")
    public AccountSelectionCardinalityEnum accountSelectionCardinality;
    public RequestedScopes withAccountSelectionCardinality(AccountSelectionCardinalityEnum accountSelectionCardinality) {
        this.accountSelectionCardinality = accountSelectionCardinality;
        return this;
    }
    @JsonProperty("optional_product_access")
    public java.util.Map<String, Object> optionalProductAccess;
    public RequestedScopes withOptionalProductAccess(java.util.Map<String, Object> optionalProductAccess) {
        this.optionalProductAccess = optionalProductAccess;
        return this;
    }
    @JsonProperty("required_product_access")
    public java.util.Map<String, Object> requiredProductAccess;
    public RequestedScopes withRequiredProductAccess(java.util.Map<String, Object> requiredProductAccess) {
        this.requiredProductAccess = requiredProductAccess;
        return this;
    }
}