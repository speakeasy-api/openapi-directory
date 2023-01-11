package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Phone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("after_hours")
    public String afterHours;
    public Phone withAfterHours(String afterHours) {
        this.afterHours = afterHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollment_coordinator")
    public String enrollmentCoordinator;
    public Phone withEnrollmentCoordinator(String enrollmentCoordinator) {
        this.enrollmentCoordinator = enrollmentCoordinator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public Phone withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("main")
    public String main;
    public Phone withMain(String main) {
        this.main = main;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mental_health_clinic")
    public String mentalHealthClinic;
    public Phone withMentalHealthClinic(String mentalHealthClinic) {
        this.mentalHealthClinic = mentalHealthClinic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient_advocate")
    public String patientAdvocate;
    public Phone withPatientAdvocate(String patientAdvocate) {
        this.patientAdvocate = patientAdvocate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pharmacy")
    public String pharmacy;
    public Phone withPharmacy(String pharmacy) {
        this.pharmacy = pharmacy;
        return this;
    }
}