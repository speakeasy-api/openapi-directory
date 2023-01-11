package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCollectdTimeSeriesRequest
 * The CreateCollectdTimeSeries request.
**/
public class CreateCollectdTimeSeriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectdPayloads")
    public CollectdPayload[] collectdPayloads;
    public CreateCollectdTimeSeriesRequest withCollectdPayloads(CollectdPayload[] collectdPayloads) {
        this.collectdPayloads = collectdPayloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectdVersion")
    public String collectdVersion;
    public CreateCollectdTimeSeriesRequest withCollectdVersion(String collectdVersion) {
        this.collectdVersion = collectdVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public MonitoredResource resource;
    public CreateCollectdTimeSeriesRequest withResource(MonitoredResource resource) {
        this.resource = resource;
        return this;
    }
}