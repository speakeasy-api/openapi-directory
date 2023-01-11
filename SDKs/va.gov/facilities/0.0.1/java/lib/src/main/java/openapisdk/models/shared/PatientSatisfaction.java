package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientSatisfaction
 * Veteran-reported satisfaction scores for health care services
**/
public class PatientSatisfaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_care_routine")
    public Float primaryCareRoutine;
    public PatientSatisfaction withPrimaryCareRoutine(Float primaryCareRoutine) {
        this.primaryCareRoutine = primaryCareRoutine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_care_urgent")
    public Float primaryCareUrgent;
    public PatientSatisfaction withPrimaryCareUrgent(Float primaryCareUrgent) {
        this.primaryCareUrgent = primaryCareUrgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialty_care_routine")
    public Float specialtyCareRoutine;
    public PatientSatisfaction withSpecialtyCareRoutine(Float specialtyCareRoutine) {
        this.specialtyCareRoutine = specialtyCareRoutine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialty_care_urgent")
    public Float specialtyCareUrgent;
    public PatientSatisfaction withSpecialtyCareUrgent(Float specialtyCareUrgent) {
        this.specialtyCareUrgent = specialtyCareUrgent;
        return this;
    }
}