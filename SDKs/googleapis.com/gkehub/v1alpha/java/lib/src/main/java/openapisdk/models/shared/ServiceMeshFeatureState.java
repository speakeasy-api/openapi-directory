package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshFeatureState
 * **Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.
**/
public class ServiceMeshFeatureState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisMessages")
    public ServiceMeshAnalysisMessage[] analysisMessages;
    public ServiceMeshFeatureState withAnalysisMessages(ServiceMeshAnalysisMessage[] analysisMessages) {
        this.analysisMessages = analysisMessages;
        return this;
    }
}