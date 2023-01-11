package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRunRewrite
 * A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).
**/
public class CloudRunRewrite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public CloudRunRewrite withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public String serviceId;
    public CloudRunRewrite withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
}