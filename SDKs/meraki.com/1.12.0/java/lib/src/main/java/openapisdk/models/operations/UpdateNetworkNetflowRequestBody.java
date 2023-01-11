package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkNetflowRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectorIp")
    public String collectorIp;
    public UpdateNetworkNetflowRequestBody withCollectorIp(String collectorIp) {
        this.collectorIp = collectorIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectorPort")
    public Long collectorPort;
    public UpdateNetworkNetflowRequestBody withCollectorPort(Long collectorPort) {
        this.collectorPort = collectorPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etaDstPort")
    public Long etaDstPort;
    public UpdateNetworkNetflowRequestBody withEtaDstPort(Long etaDstPort) {
        this.etaDstPort = etaDstPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etaEnabled")
    public Boolean etaEnabled;
    public UpdateNetworkNetflowRequestBody withEtaEnabled(Boolean etaEnabled) {
        this.etaEnabled = etaEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingEnabled")
    public Boolean reportingEnabled;
    public UpdateNetworkNetflowRequestBody withReportingEnabled(Boolean reportingEnabled) {
        this.reportingEnabled = reportingEnabled;
        return this;
    }
}