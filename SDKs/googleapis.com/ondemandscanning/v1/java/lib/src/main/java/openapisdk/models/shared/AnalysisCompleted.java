package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalysisCompleted
 * Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
**/
public class AnalysisCompleted {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisType")
    public String[] analysisType;
    public AnalysisCompleted withAnalysisType(String[] analysisType) {
        this.analysisType = analysisType;
        return this;
    }
}