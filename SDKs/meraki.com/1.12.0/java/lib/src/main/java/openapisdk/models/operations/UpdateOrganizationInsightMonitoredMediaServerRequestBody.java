package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationInsightMonitoredMediaServerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public UpdateOrganizationInsightMonitoredMediaServerRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestEffortMonitoringEnabled")
    public Boolean bestEffortMonitoringEnabled;
    public UpdateOrganizationInsightMonitoredMediaServerRequestBody withBestEffortMonitoringEnabled(Boolean bestEffortMonitoringEnabled) {
        this.bestEffortMonitoringEnabled = bestEffortMonitoringEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateOrganizationInsightMonitoredMediaServerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}