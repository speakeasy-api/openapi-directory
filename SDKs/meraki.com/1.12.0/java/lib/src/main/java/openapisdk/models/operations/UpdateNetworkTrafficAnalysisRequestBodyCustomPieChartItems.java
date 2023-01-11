package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems {
    @JsonProperty("name")
    public String name;
    public UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum type;
    public UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems withType(UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems withValue(String value) {
        this.value = value;
        return this;
    }
}