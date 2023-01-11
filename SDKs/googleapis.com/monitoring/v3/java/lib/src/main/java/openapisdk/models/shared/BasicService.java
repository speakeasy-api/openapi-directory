package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicService
 * A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
**/
public class BasicService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLabels")
    public java.util.Map<String, String> serviceLabels;
    public BasicService withServiceLabels(java.util.Map<String, String> serviceLabels) {
        this.serviceLabels = serviceLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceType")
    public String serviceType;
    public BasicService withServiceType(String serviceType) {
        this.serviceType = serviceType;
        return this;
    }
}