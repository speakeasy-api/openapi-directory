package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DrivingDirectionMetricsRequest
 * A request for driving direction insights.
**/
public class DrivingDirectionMetricsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public DrivingDirectionMetricsRequest withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numDays")
    public DrivingDirectionMetricsRequestNumDaysEnum numDays;
    public DrivingDirectionMetricsRequest withNumDays(DrivingDirectionMetricsRequestNumDaysEnum numDays) {
        this.numDays = numDays;
        return this;
    }
}