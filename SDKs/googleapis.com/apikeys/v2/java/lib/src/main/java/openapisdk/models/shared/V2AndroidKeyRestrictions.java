package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2AndroidKeyRestrictions
 * The Android apps that are allowed to use the key.
**/
public class V2AndroidKeyRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedApplications")
    public V2AndroidApplication[] allowedApplications;
    public V2AndroidKeyRestrictions withAllowedApplications(V2AndroidApplication[] allowedApplications) {
        this.allowedApplications = allowedApplications;
        return this;
    }
}