package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeWorkEligibility
 * Add or update I-9 work authorization information.
**/
public class EmployeeWorkEligibility {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alienOrAdmissionDocumentNumber")
    public String alienOrAdmissionDocumentNumber;
    public EmployeeWorkEligibility withAlienOrAdmissionDocumentNumber(String alienOrAdmissionDocumentNumber) {
        this.alienOrAdmissionDocumentNumber = alienOrAdmissionDocumentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestedDate")
    public String attestedDate;
    public EmployeeWorkEligibility withAttestedDate(String attestedDate) {
        this.attestedDate = attestedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryOfIssuance")
    public String countryOfIssuance;
    public EmployeeWorkEligibility withCountryOfIssuance(String countryOfIssuance) {
        this.countryOfIssuance = countryOfIssuance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foreignPassportNumber")
    public String foreignPassportNumber;
    public EmployeeWorkEligibility withForeignPassportNumber(String foreignPassportNumber) {
        this.foreignPassportNumber = foreignPassportNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i94AdmissionNumber")
    public String i94AdmissionNumber;
    public EmployeeWorkEligibility withI94AdmissionNumber(String i94AdmissionNumber) {
        this.i94AdmissionNumber = i94AdmissionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i9DateVerified")
    public String i9DateVerified;
    public EmployeeWorkEligibility withI9DateVerified(String i9DateVerified) {
        this.i9DateVerified = i9DateVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i9Notes")
    public String i9Notes;
    public EmployeeWorkEligibility withI9Notes(String i9Notes) {
        this.i9Notes = i9Notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isI9Verified")
    public Boolean isI9Verified;
    public EmployeeWorkEligibility withIsI9Verified(Boolean isI9Verified) {
        this.isI9Verified = isI9Verified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSsnVerified")
    public Boolean isSsnVerified;
    public EmployeeWorkEligibility withIsSsnVerified(Boolean isSsnVerified) {
        this.isSsnVerified = isSsnVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssnDateVerified")
    public String ssnDateVerified;
    public EmployeeWorkEligibility withSsnDateVerified(String ssnDateVerified) {
        this.ssnDateVerified = ssnDateVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssnNotes")
    public String ssnNotes;
    public EmployeeWorkEligibility withSsnNotes(String ssnNotes) {
        this.ssnNotes = ssnNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visaType")
    public String visaType;
    public EmployeeWorkEligibility withVisaType(String visaType) {
        this.visaType = visaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workAuthorization")
    public String workAuthorization;
    public EmployeeWorkEligibility withWorkAuthorization(String workAuthorization) {
        this.workAuthorization = workAuthorization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workUntil")
    public String workUntil;
    public EmployeeWorkEligibility withWorkUntil(String workUntil) {
        this.workUntil = workUntil;
        return this;
    }
}