package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicSli
 * An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service.
**/
public class BasicSli {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public java.util.Map<String, Object> availability;
    public BasicSli withAvailability(java.util.Map<String, Object> availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency")
    public LatencyCriteria latency;
    public BasicSli withLatency(LatencyCriteria latency) {
        this.latency = latency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String[] location;
    public BasicSli withLocation(String[] location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String[] method;
    public BasicSli withMethod(String[] method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String[] version;
    public BasicSli withVersion(String[] version) {
        this.version = version;
        return this;
    }
}