package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StagedEmployee
 * The staged employee model
**/
public class StagedEmployee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalDirectDeposit")
    public StagedEmployeeAdditionalDirectDeposit[] additionalDirectDeposit;
    public StagedEmployee withAdditionalDirectDeposit(StagedEmployeeAdditionalDirectDeposit[] additionalDirectDeposit) {
        this.additionalDirectDeposit = additionalDirectDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitSetup")
    public StagedEmployeeBenefitSetup[] benefitSetup;
    public StagedEmployee withBenefitSetup(StagedEmployeeBenefitSetup[] benefitSetup) {
        this.benefitSetup = benefitSetup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthDate")
    public String birthDate;
    public StagedEmployee withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBooleanFields")
    public StagedEmployeeCustomBooleanFields[] customBooleanFields;
    public StagedEmployee withCustomBooleanFields(StagedEmployeeCustomBooleanFields[] customBooleanFields) {
        this.customBooleanFields = customBooleanFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDateFields")
    public StagedEmployeeCustomDateFields[] customDateFields;
    public StagedEmployee withCustomDateFields(StagedEmployeeCustomDateFields[] customDateFields) {
        this.customDateFields = customDateFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDropDownFields")
    public StagedEmployeeCustomDropDownFields[] customDropDownFields;
    public StagedEmployee withCustomDropDownFields(StagedEmployeeCustomDropDownFields[] customDropDownFields) {
        this.customDropDownFields = customDropDownFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customNumberFields")
    public StagedEmployeeCustomNumberFields[] customNumberFields;
    public StagedEmployee withCustomNumberFields(StagedEmployeeCustomNumberFields[] customNumberFields) {
        this.customNumberFields = customNumberFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customTextFields")
    public StagedEmployeeCustomTextFields[] customTextFields;
    public StagedEmployee withCustomTextFields(StagedEmployeeCustomTextFields[] customTextFields) {
        this.customTextFields = customTextFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departmentPosition")
    public StagedEmployeeDepartmentPosition[] departmentPosition;
    public StagedEmployee withDepartmentPosition(StagedEmployeeDepartmentPosition[] departmentPosition) {
        this.departmentPosition = departmentPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabilityDescription")
    public String disabilityDescription;
    public StagedEmployee withDisabilityDescription(String disabilityDescription) {
        this.disabilityDescription = disabilityDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeId")
    public String employeeId;
    public StagedEmployee withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ethnicity")
    public String ethnicity;
    public StagedEmployee withEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federalTax")
    public StagedEmployeeFederalTax[] federalTax;
    public StagedEmployee withFederalTax(StagedEmployeeFederalTax[] federalTax) {
        this.federalTax = federalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public StagedEmployee withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fitwExemptReason")
    public String fitwExemptReason;
    public StagedEmployee withFitwExemptReason(String fitwExemptReason) {
        this.fitwExemptReason = fitwExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("futaExemptReason")
    public String futaExemptReason;
    public StagedEmployee withFutaExemptReason(String futaExemptReason) {
        this.futaExemptReason = futaExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public StagedEmployee withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeAddress")
    public StagedEmployeeHomeAddress[] homeAddress;
    public StagedEmployee withHomeAddress(StagedEmployeeHomeAddress[] homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEmployee943")
    public Boolean isEmployee943;
    public StagedEmployee withIsEmployee943(Boolean isEmployee943) {
        this.isEmployee943 = isEmployee943;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSmoker")
    public Boolean isSmoker;
    public StagedEmployee withIsSmoker(Boolean isSmoker) {
        this.isSmoker = isSmoker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public StagedEmployee withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localTax")
    public StagedEmployeeLocalTax[] localTax;
    public StagedEmployee withLocalTax(StagedEmployeeLocalTax[] localTax) {
        this.localTax = localTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainDirectDeposit")
    public StagedEmployeeMainDirectDeposit[] mainDirectDeposit;
    public StagedEmployee withMainDirectDeposit(StagedEmployeeMainDirectDeposit[] mainDirectDeposit) {
        this.mainDirectDeposit = mainDirectDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maritalStatus")
    public String maritalStatus;
    public StagedEmployee withMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medExemptReason")
    public String medExemptReason;
    public StagedEmployee withMedExemptReason(String medExemptReason) {
        this.medExemptReason = medExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middleName")
    public String middleName;
    public StagedEmployee withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonPrimaryStateTax")
    public StagedEmployeeNonPrimaryStateTax[] nonPrimaryStateTax;
    public StagedEmployee withNonPrimaryStateTax(StagedEmployeeNonPrimaryStateTax[] nonPrimaryStateTax) {
        this.nonPrimaryStateTax = nonPrimaryStateTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredName")
    public String preferredName;
    public StagedEmployee withPreferredName(String preferredName) {
        this.preferredName = preferredName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPayRate")
    public StagedEmployeePrimaryPayRate[] primaryPayRate;
    public StagedEmployee withPrimaryPayRate(StagedEmployeePrimaryPayRate[] primaryPayRate) {
        this.primaryPayRate = primaryPayRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryStateTax")
    public StagedEmployeePrimaryStateTax[] primaryStateTax;
    public StagedEmployee withPrimaryStateTax(StagedEmployeePrimaryStateTax[] primaryStateTax) {
        this.primaryStateTax = primaryStateTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorLastName")
    public String priorLastName;
    public StagedEmployee withPriorLastName(String priorLastName) {
        this.priorLastName = priorLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salutation")
    public String salutation;
    public StagedEmployee withSalutation(String salutation) {
        this.salutation = salutation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sitwExemptReason")
    public String sitwExemptReason;
    public StagedEmployee withSitwExemptReason(String sitwExemptReason) {
        this.sitwExemptReason = sitwExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssExemptReason")
    public String ssExemptReason;
    public StagedEmployee withSsExemptReason(String ssExemptReason) {
        this.ssExemptReason = ssExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public StagedEmployee withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StagedEmployeeStatus[] status;
    public StagedEmployee withStatus(StagedEmployeeStatus[] status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public StagedEmployee withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiExemptReason")
    public String suiExemptReason;
    public StagedEmployee withSuiExemptReason(String suiExemptReason) {
        this.suiExemptReason = suiExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiState")
    public String suiState;
    public StagedEmployee withSuiState(String suiState) {
        this.suiState = suiState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxDistributionCode1099R")
    public String taxDistributionCode1099R;
    public StagedEmployee withTaxDistributionCode1099R(String taxDistributionCode1099R) {
        this.taxDistributionCode1099R = taxDistributionCode1099R;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxForm")
    public String taxForm;
    public StagedEmployee withTaxForm(String taxForm) {
        this.taxForm = taxForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("veteranDescription")
    public String veteranDescription;
    public StagedEmployee withVeteranDescription(String veteranDescription) {
        this.veteranDescription = veteranDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webTime")
    public StagedEmployeeWebTime webTime;
    public StagedEmployee withWebTime(StagedEmployeeWebTime webTime) {
        this.webTime = webTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workAddress")
    public StagedEmployeeWorkAddress[] workAddress;
    public StagedEmployee withWorkAddress(StagedEmployeeWorkAddress[] workAddress) {
        this.workAddress = workAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workEligibility")
    public StagedEmployeeWorkEligibility[] workEligibility;
    public StagedEmployee withWorkEligibility(StagedEmployeeWorkEligibility[] workEligibility) {
        this.workEligibility = workEligibility;
        return this;
    }
}