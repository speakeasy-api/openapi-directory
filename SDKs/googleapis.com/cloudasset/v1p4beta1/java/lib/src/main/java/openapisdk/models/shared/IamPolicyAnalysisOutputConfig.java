package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IamPolicyAnalysisOutputConfig
 * Output configuration for export IAM policy analysis destination.
**/
public class IamPolicyAnalysisOutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsDestination")
    public GcsDestination gcsDestination;
    public IamPolicyAnalysisOutputConfig withGcsDestination(GcsDestination gcsDestination) {
        this.gcsDestination = gcsDestination;
        return this;
    }
}