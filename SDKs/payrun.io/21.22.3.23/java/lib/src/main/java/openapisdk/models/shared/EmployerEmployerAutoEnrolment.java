package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployerEmployerAutoEnrolment
 * The employers' auto enrolment
**/
public class EmployerEmployerAutoEnrolment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pension")
    public EmployerEmployerAutoEnrolmentPension pension;
    public EmployerEmployerAutoEnrolment withPension(EmployerEmployerAutoEnrolmentPension pension) {
        this.pension = pension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostponementDate")
    public LocalDate postponementDate;
    public EmployerEmployerAutoEnrolment withPostponementDate(LocalDate postponementDate) {
        this.postponementDate = postponementDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryEmail")
    public String primaryEmail;
    public EmployerEmployerAutoEnrolment withPrimaryEmail(String primaryEmail) {
        this.primaryEmail = primaryEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryFirstName")
    public String primaryFirstName;
    public EmployerEmployerAutoEnrolment withPrimaryFirstName(String primaryFirstName) {
        this.primaryFirstName = primaryFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryJobTitle")
    public String primaryJobTitle;
    public EmployerEmployerAutoEnrolment withPrimaryJobTitle(String primaryJobTitle) {
        this.primaryJobTitle = primaryJobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryLastName")
    public String primaryLastName;
    public EmployerEmployerAutoEnrolment withPrimaryLastName(String primaryLastName) {
        this.primaryLastName = primaryLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryTelephone")
    public String primaryTelephone;
    public EmployerEmployerAutoEnrolment withPrimaryTelephone(String primaryTelephone) {
        this.primaryTelephone = primaryTelephone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReEnrolmentDayOffset")
    public Integer reEnrolmentDayOffset;
    public EmployerEmployerAutoEnrolment withReEnrolmentDayOffset(Integer reEnrolmentDayOffset) {
        this.reEnrolmentDayOffset = reEnrolmentDayOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReEnrolmentMonthOffset")
    public Integer reEnrolmentMonthOffset;
    public EmployerEmployerAutoEnrolment withReEnrolmentMonthOffset(Integer reEnrolmentMonthOffset) {
        this.reEnrolmentMonthOffset = reEnrolmentMonthOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryEmail")
    public String secondaryEmail;
    public EmployerEmployerAutoEnrolment withSecondaryEmail(String secondaryEmail) {
        this.secondaryEmail = secondaryEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryFirstName")
    public String secondaryFirstName;
    public EmployerEmployerAutoEnrolment withSecondaryFirstName(String secondaryFirstName) {
        this.secondaryFirstName = secondaryFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryJobTitle")
    public String secondaryJobTitle;
    public EmployerEmployerAutoEnrolment withSecondaryJobTitle(String secondaryJobTitle) {
        this.secondaryJobTitle = secondaryJobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryLastName")
    public String secondaryLastName;
    public EmployerEmployerAutoEnrolment withSecondaryLastName(String secondaryLastName) {
        this.secondaryLastName = secondaryLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryTelephone")
    public String secondaryTelephone;
    public EmployerEmployerAutoEnrolment withSecondaryTelephone(String secondaryTelephone) {
        this.secondaryTelephone = secondaryTelephone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StagingDate")
    public LocalDate stagingDate;
    public EmployerEmployerAutoEnrolment withStagingDate(LocalDate stagingDate) {
        this.stagingDate = stagingDate;
        return this;
    }
}