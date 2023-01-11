package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationInsightMonitoredMediaServerRequestBody {
    @JsonProperty("address")
    public String address;
    public CreateOrganizationInsightMonitoredMediaServerRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestEffortMonitoringEnabled")
    public Boolean bestEffortMonitoringEnabled;
    public CreateOrganizationInsightMonitoredMediaServerRequestBody withBestEffortMonitoringEnabled(Boolean bestEffortMonitoringEnabled) {
        this.bestEffortMonitoringEnabled = bestEffortMonitoringEnabled;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateOrganizationInsightMonitoredMediaServerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}