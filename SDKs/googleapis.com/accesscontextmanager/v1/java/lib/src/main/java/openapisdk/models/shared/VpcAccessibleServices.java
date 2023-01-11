package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VpcAccessibleServices
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
**/
public class VpcAccessibleServices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedServices")
    public String[] allowedServices;
    public VpcAccessibleServices withAllowedServices(String[] allowedServices) {
        this.allowedServices = allowedServices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableRestriction")
    public Boolean enableRestriction;
    public VpcAccessibleServices withEnableRestriction(Boolean enableRestriction) {
        this.enableRestriction = enableRestriction;
        return this;
    }
}