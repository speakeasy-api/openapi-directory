package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebServerNetworkAccessControl
 * Network-level access control policy for the Airflow web server.
**/
public class WebServerNetworkAccessControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedIpRanges")
    public AllowedIpRange[] allowedIpRanges;
    public WebServerNetworkAccessControl withAllowedIpRanges(AllowedIpRange[] allowedIpRanges) {
        this.allowedIpRanges = allowedIpRanges;
        return this;
    }
}