/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmployeeWorkEligibility - Add or update I-9 work authorization information.
 */
public class EmployeeWorkEligibility {
    /**
     * Employee USCIS or Admission Number. &lt;br  /&gt; Must be 7-10 characters and may begin with an 'A'
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alienOrAdmissionDocumentNumber")
    public String alienOrAdmissionDocumentNumber;

    public EmployeeWorkEligibility withAlienOrAdmissionDocumentNumber(String alienOrAdmissionDocumentNumber) {
        this.alienOrAdmissionDocumentNumber = alienOrAdmissionDocumentNumber;
        return this;
    }
    
    /**
     * The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attestedDate")
    public String attestedDate;

    public EmployeeWorkEligibility withAttestedDate(String attestedDate) {
        this.attestedDate = attestedDate;
        return this;
    }
    
    /**
     * If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.&lt;br  /&gt; Max length: 30
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryOfIssuance")
    public String countryOfIssuance;

    public EmployeeWorkEligibility withCountryOfIssuance(String countryOfIssuance) {
        this.countryOfIssuance = countryOfIssuance;
        return this;
    }
    
    /**
     * Foreign Passport Number.&lt;br  /&gt; Max length: 50
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foreignPassportNumber")
    public String foreignPassportNumber;

    public EmployeeWorkEligibility withForeignPassportNumber(String foreignPassportNumber) {
        this.foreignPassportNumber = foreignPassportNumber;
        return this;
    }
    
    /**
     * Form I-94 admission number.&lt;br  /&gt; Must be 11 numeric characters
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i94AdmissionNumber")
    public String i94AdmissionNumber;

    public EmployeeWorkEligibility withI94AdmissionNumber(String i94AdmissionNumber) {
        this.i94AdmissionNumber = i94AdmissionNumber;
        return this;
    }
    
    /**
     * Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i9DateVerified")
    public String i9DateVerified;

    public EmployeeWorkEligibility withI9DateVerified(String i9DateVerified) {
        this.i9DateVerified = i9DateVerified;
        return this;
    }
    
    /**
     * Notes regarding employee's i9.&lt;br  /&gt; Max length: 4000
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("i9Notes")
    public String i9Notes;

    public EmployeeWorkEligibility withI9Notes(String i9Notes) {
        this.i9Notes = i9Notes;
        return this;
    }
    
    /**
     * Indicates if employee I9 is verified.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isI9Verified")
    public Boolean isI9Verified;

    public EmployeeWorkEligibility withIsI9Verified(Boolean isI9Verified) {
        this.isI9Verified = isI9Verified;
        return this;
    }
    
    /**
     * Indicates if employee SSN is verified.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSsnVerified")
    public Boolean isSsnVerified;

    public EmployeeWorkEligibility withIsSsnVerified(Boolean isSsnVerified) {
        this.isSsnVerified = isSsnVerified;
        return this;
    }
    
    /**
     * The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssnDateVerified")
    public String ssnDateVerified;

    public EmployeeWorkEligibility withSsnDateVerified(String ssnDateVerified) {
        this.ssnDateVerified = ssnDateVerified;
        return this;
    }
    
    /**
     * Notes regarding employee's SSN.&lt;br  /&gt; Max length: 4000
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssnNotes")
    public String ssnNotes;

    public EmployeeWorkEligibility withSsnNotes(String ssnNotes) {
        this.ssnNotes = ssnNotes;
        return this;
    }
    
    /**
     * Employee Visa type. Must match one of the system coded values.&lt;br  /&gt; Max length: 100
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visaType")
    public String visaType;

    public EmployeeWorkEligibility withVisaType(String visaType) {
        this.visaType = visaType;
        return this;
    }
    
    /**
     * Employee work authorization. Must match one of the system coded values.&lt;br  /&gt; Max length: 100
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workAuthorization")
    public String workAuthorization;

    public EmployeeWorkEligibility withWorkAuthorization(String workAuthorization) {
        this.workAuthorization = workAuthorization;
        return this;
    }
    
    /**
     * End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workUntil")
    public String workUntil;

    public EmployeeWorkEligibility withWorkUntil(String workUntil) {
        this.workUntil = workUntil;
        return this;
    }
    
    public EmployeeWorkEligibility(){}
}
