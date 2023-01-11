package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeEmployee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AEAssessmentOverride")
    public EmployeeEmployeeAeAssessmentOverrideEnum aeAssessmentOverride;
    public EmployeeEmployee withAeAssessmentOverride(EmployeeEmployeeAeAssessmentOverrideEnum aeAssessmentOverride) {
        this.aeAssessmentOverride = aeAssessmentOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AEAssessmentOverrideDate")
    public LocalDate aeAssessmentOverrideDate;
    public EmployeeEmployee withAeAssessmentOverrideDate(LocalDate aeAssessmentOverrideDate) {
        this.aeAssessmentOverrideDate = aeAssessmentOverrideDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AEExclusionReasonCode")
    public EmployeeEmployeeAeExclusionReasonCodeEnum aeExclusionReasonCode;
    public EmployeeEmployee withAeExclusionReasonCode(EmployeeEmployeeAeExclusionReasonCodeEnum aeExclusionReasonCode) {
        this.aeExclusionReasonCode = aeExclusionReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AEPostponementDate")
    public LocalDate aePostponementDate;
    public EmployeeEmployee withAePostponementDate(LocalDate aePostponementDate) {
        this.aePostponementDate = aePostponementDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Address")
    public EmployeeEmployeeAddress address;
    public EmployeeEmployee withAddress(EmployeeEmployeeAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankAccount")
    public EmployeeEmployeeBankAccount bankAccount;
    public EmployeeEmployee withBankAccount(EmployeeEmployeeBankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public EmployeeEmployee withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DateOfBirth")
    public LocalDate dateOfBirth;
    public EmployeeEmployee withDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Deactivated")
    public Boolean deactivated;
    public EmployeeEmployee withDeactivated(Boolean deactivated) {
        this.deactivated = deactivated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectorshipAppointmentDate")
    public LocalDate directorshipAppointmentDate;
    public EmployeeEmployee withDirectorshipAppointmentDate(LocalDate directorshipAppointmentDate) {
        this.directorshipAppointmentDate = directorshipAppointmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EEACitizen")
    public Boolean eeaCitizen;
    public EmployeeEmployee withEeaCitizen(Boolean eeaCitizen) {
        this.eeaCitizen = eeaCitizen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EPM6")
    public Boolean epm6;
    public EmployeeEmployee withEpm6(Boolean epm6) {
        this.epm6 = epm6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public EmployeeEmployee withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeePartner")
    public EmployeeEmployeeEmployeePartner employeePartner;
    public EmployeeEmployee withEmployeePartner(EmployeeEmployeeEmployeePartner employeePartner) {
        this.employeePartner = employeePartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstName")
    public String firstName;
    public EmployeeEmployee withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public EmployeeEmployeeGenderEnum gender;
    public EmployeeEmployee withGender(EmployeeEmployeeGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HoursPerWeek")
    public Double hoursPerWeek;
    public EmployeeEmployee withHoursPerWeek(Double hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Initials")
    public String initials;
    public EmployeeEmployee withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IrregularEmployment")
    public Boolean irregularEmployment;
    public EmployeeEmployee withIrregularEmployment(Boolean irregularEmployment) {
        this.irregularEmployment = irregularEmployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAgencyWorker")
    public Boolean isAgencyWorker;
    public EmployeeEmployee withIsAgencyWorker(Boolean isAgencyWorker) {
        this.isAgencyWorker = isAgencyWorker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastName")
    public String lastName;
    public EmployeeEmployee withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaverReason")
    public EmployeeEmployeeLeaverReasonEnum leaverReason;
    public EmployeeEmployee withLeaverReason(EmployeeEmployeeLeaverReasonEnum leaverReason) {
        this.leaverReason = leaverReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeavingDate")
    public LocalDate leavingDate;
    public EmployeeEmployee withLeavingDate(LocalDate leavingDate) {
        this.leavingDate = leavingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaritalStatus")
    public EmployeeEmployeeMaritalStatusEnum maritalStatus;
    public EmployeeEmployee withMaritalStatus(EmployeeEmployeeMaritalStatusEnum maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetaData")
    public java.util.Map<String, Object> metaData;
    public EmployeeEmployee withMetaData(java.util.Map<String, Object> metaData) {
        this.metaData = metaData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MiddleName")
    public String middleName;
    public EmployeeEmployee withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NiNumber")
    public String niNumber;
    public EmployeeEmployee withNiNumber(String niNumber) {
        this.niNumber = niNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NicLiability")
    public EmployeeEmployeeNicLiabilityEnum nicLiability;
    public EmployeeEmployee withNicLiability(EmployeeEmployeeNicLiabilityEnum nicLiability) {
        this.nicLiability = nicLiability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OffPayrollWorker")
    public Boolean offPayrollWorker;
    public EmployeeEmployee withOffPayrollWorker(Boolean offPayrollWorker) {
        this.offPayrollWorker = offPayrollWorker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnStrike")
    public Boolean onStrike;
    public EmployeeEmployee withOnStrike(Boolean onStrike) {
        this.onStrike = onStrike;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PassportNumber")
    public String passportNumber;
    public EmployeeEmployee withPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaySchedule")
    public EmployeeEmployeePaySchedule paySchedule;
    public EmployeeEmployee withPaySchedule(EmployeeEmployeePaySchedule paySchedule) {
        this.paySchedule = paySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentMethod")
    public EmployeeEmployeePaymentMethodEnum paymentMethod;
    public EmployeeEmployee withPaymentMethod(EmployeeEmployeePaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentToANonIndividual")
    public Boolean paymentToANonIndividual;
    public EmployeeEmployee withPaymentToANonIndividual(Boolean paymentToANonIndividual) {
        this.paymentToANonIndividual = paymentToANonIndividual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public EmployeeEmployeeRegionEnum region;
    public EmployeeEmployee withRegion(EmployeeEmployeeRegionEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public Integer revision;
    public EmployeeEmployee withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleExclusions")
    public EmployeeEmployeeRuleExclusionsEnum ruleExclusions;
    public EmployeeEmployee withRuleExclusions(EmployeeEmployeeRuleExclusionsEnum ruleExclusions) {
        this.ruleExclusions = ruleExclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Seconded")
    public EmployeeEmployeeSecondedEnum seconded;
    public EmployeeEmployee withSeconded(EmployeeEmployeeSecondedEnum seconded) {
        this.seconded = seconded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public LocalDate startDate;
    public EmployeeEmployee withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StarterDeclaration")
    public EmployeeEmployeeStarterDeclarationEnum starterDeclaration;
    public EmployeeEmployee withStarterDeclaration(EmployeeEmployeeStarterDeclarationEnum starterDeclaration) {
        this.starterDeclaration = starterDeclaration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Territory")
    public EmployeeEmployeeTerritoryEnum territory;
    public EmployeeEmployee withTerritory(EmployeeEmployeeTerritoryEnum territory) {
        this.territory = territory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public EmployeeEmployee withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkingWeek")
    public EmployeeEmployeeWorkingWeekEnum workingWeek;
    public EmployeeEmployee withWorkingWeek(EmployeeEmployeeWorkingWeekEnum workingWeek) {
        this.workingWeek = workingWeek;
        return this;
    }
}