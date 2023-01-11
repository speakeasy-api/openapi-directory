package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
**/
public class GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedServices")
    public String[] allowedServices;
    public GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices withAllowedServices(String[] allowedServices) {
        this.allowedServices = allowedServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableRestriction")
    public Boolean enableRestriction;
    public GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices withEnableRestriction(Boolean enableRestriction) {
        this.enableRestriction = enableRestriction;
        return this;
    }
}