package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalNrqzValidation
 * Information about National Radio Quiet Zone validation.
**/
public class SasPortalNrqzValidation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public SasPortalNrqzValidation withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpiId")
    public String cpiId;
    public SasPortalNrqzValidation withCpiId(String cpiId) {
        this.cpiId = cpiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public SasPortalNrqzValidation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public SasPortalNrqzValidation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SasPortalNrqzValidationStateEnum state;
    public SasPortalNrqzValidation withState(SasPortalNrqzValidationStateEnum state) {
        this.state = state;
        return this;
    }
}