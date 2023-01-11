package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Satisfaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective_date")
    public LocalDate effectiveDate;
    public Satisfaction withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public PatientSatisfaction health;
    public Satisfaction withHealth(PatientSatisfaction health) {
        this.health = health;
        return this;
    }
}