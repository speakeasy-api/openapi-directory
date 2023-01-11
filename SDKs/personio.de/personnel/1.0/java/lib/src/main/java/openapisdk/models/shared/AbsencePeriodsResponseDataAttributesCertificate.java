package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AbsencePeriodsResponseDataAttributesCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AbsencePeriodsResponseDataAttributesCertificate withStatus(String status) {
        this.status = status;
        return this;
    }
}