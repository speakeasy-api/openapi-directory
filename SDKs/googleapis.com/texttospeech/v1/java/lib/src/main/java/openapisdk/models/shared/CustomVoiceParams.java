package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomVoiceParams
 * Description of the custom voice to be synthesized.
**/
public class CustomVoiceParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public CustomVoiceParams withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportedUsage")
    public CustomVoiceParamsReportedUsageEnum reportedUsage;
    public CustomVoiceParams withReportedUsage(CustomVoiceParamsReportedUsageEnum reportedUsage) {
        this.reportedUsage = reportedUsage;
        return this;
    }
}