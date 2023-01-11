package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InspectUrlIndexResponse
 * Index-Status inspection response.
**/
public class InspectUrlIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inspectionResult")
    public UrlInspectionResult inspectionResult;
    public InspectUrlIndexResponse withInspectionResult(UrlInspectionResult inspectionResult) {
        this.inspectionResult = inspectionResult;
        return this;
    }
}