package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RichResultsInspectionResult
 * Rich-Results inspection result, including any rich results found at this URL.
**/
public class RichResultsInspectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedItems")
    public DetectedItems[] detectedItems;
    public RichResultsInspectionResult withDetectedItems(DetectedItems[] detectedItems) {
        this.detectedItems = detectedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verdict")
    public RichResultsInspectionResultVerdictEnum verdict;
    public RichResultsInspectionResult withVerdict(RichResultsInspectionResultVerdictEnum verdict) {
        this.verdict = verdict;
        return this;
    }
}