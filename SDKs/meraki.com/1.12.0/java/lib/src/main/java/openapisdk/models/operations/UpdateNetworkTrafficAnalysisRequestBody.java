package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkTrafficAnalysisRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPieChartItems")
    public UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[] customPieChartItems;
    public UpdateNetworkTrafficAnalysisRequestBody withCustomPieChartItems(UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[] customPieChartItems) {
        this.customPieChartItems = customPieChartItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public UpdateNetworkTrafficAnalysisRequestBodyModeEnum mode;
    public UpdateNetworkTrafficAnalysisRequestBody withMode(UpdateNetworkTrafficAnalysisRequestBodyModeEnum mode) {
        this.mode = mode;
        return this;
    }
}