package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareProfileRequestPatient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hipCode")
    public String hipCode;
    public ShareProfileRequestPatient withHipCode(String hipCode) {
        this.hipCode = hipCode;
        return this;
    }
    @JsonProperty("userDemographics")
    public ShareProfileRequestPatientUserDemographics userDemographics;
    public ShareProfileRequestPatient withUserDemographics(ShareProfileRequestPatientUserDemographics userDemographics) {
        this.userDemographics = userDemographics;
        return this;
    }
}