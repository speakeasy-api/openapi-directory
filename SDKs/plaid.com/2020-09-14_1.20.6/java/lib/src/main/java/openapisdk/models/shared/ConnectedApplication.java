package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectedApplication
 * Describes the connected application for a particular end user.
**/
public class ConnectedApplication {
    @JsonProperty("application_id")
    public String applicationId;
    public ConnectedApplication withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("application_url")
    public String applicationUrl;
    public ConnectedApplication withApplicationUrl(String applicationUrl) {
        this.applicationUrl = applicationUrl;
        return this;
    }
    @JsonProperty("created_at")
    public String createdAt;
    public ConnectedApplication withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("logo")
    public String logo;
    public ConnectedApplication withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonProperty("logo_url")
    public String logoUrl;
    public ConnectedApplication withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ConnectedApplication withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("product_data_types")
    public ConnectedApplicationProductDataTypesEnum[] productDataTypes;
    public ConnectedApplication withProductDataTypes(ConnectedApplicationProductDataTypesEnum[] productDataTypes) {
        this.productDataTypes = productDataTypes;
        return this;
    }
    @JsonProperty("reason_for_access")
    public String reasonForAccess;
    public ConnectedApplication withReasonForAccess(String reasonForAccess) {
        this.reasonForAccess = reasonForAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_scopes")
    public RequestedScopes requestedScopes;
    public ConnectedApplication withRequestedScopes(RequestedScopes requestedScopes) {
        this.requestedScopes = requestedScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public java.util.Map<String, Object> scopes;
    public ConnectedApplication withScopes(java.util.Map<String, Object> scopes) {
        this.scopes = scopes;
        return this;
    }
}