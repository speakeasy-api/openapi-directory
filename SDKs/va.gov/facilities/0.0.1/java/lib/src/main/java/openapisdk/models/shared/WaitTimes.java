package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WaitTimes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective_date")
    public LocalDate effectiveDate;
    public WaitTimes withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public PatientWaitTime[] health;
    public WaitTimes withHealth(PatientWaitTime[] health) {
        this.health = health;
        return this;
    }
}