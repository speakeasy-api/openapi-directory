package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRun
 * Cloud Run service. Learn more at https://cloud.google.com/run.
**/
public class CloudRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public CloudRun withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public CloudRun withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}