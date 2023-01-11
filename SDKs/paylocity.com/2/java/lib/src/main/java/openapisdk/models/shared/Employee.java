package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Employee
 * The employee model
**/
public class Employee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalDirectDeposit")
    public EmployeeAdditionalDirectDeposit[] additionalDirectDeposit;
    public Employee withAdditionalDirectDeposit(EmployeeAdditionalDirectDeposit[] additionalDirectDeposit) {
        this.additionalDirectDeposit = additionalDirectDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRate")
    public EmployeeAdditionalRate[] additionalRate;
    public Employee withAdditionalRate(EmployeeAdditionalRate[] additionalRate) {
        this.additionalRate = additionalRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefitSetup")
    public EmployeeBenefitSetup benefitSetup;
    public Employee withBenefitSetup(EmployeeBenefitSetup benefitSetup) {
        this.benefitSetup = benefitSetup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthDate")
    public String birthDate;
    public Employee withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyFEIN")
    public String companyFEIN;
    public Employee withCompanyFein(String companyFEIN) {
        this.companyFEIN = companyFEIN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public Employee withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Employee withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customBooleanFields")
    public EmployeeCustomBooleanFields[] customBooleanFields;
    public Employee withCustomBooleanFields(EmployeeCustomBooleanFields[] customBooleanFields) {
        this.customBooleanFields = customBooleanFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDateFields")
    public EmployeeCustomDateFields[] customDateFields;
    public Employee withCustomDateFields(EmployeeCustomDateFields[] customDateFields) {
        this.customDateFields = customDateFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDropDownFields")
    public EmployeeCustomDropDownFields[] customDropDownFields;
    public Employee withCustomDropDownFields(EmployeeCustomDropDownFields[] customDropDownFields) {
        this.customDropDownFields = customDropDownFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customNumberFields")
    public EmployeeCustomNumberFields[] customNumberFields;
    public Employee withCustomNumberFields(EmployeeCustomNumberFields[] customNumberFields) {
        this.customNumberFields = customNumberFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customTextFields")
    public EmployeeCustomTextFields[] customTextFields;
    public Employee withCustomTextFields(EmployeeCustomTextFields[] customTextFields) {
        this.customTextFields = customTextFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departmentPosition")
    public EmployeeDepartmentPosition departmentPosition;
    public Employee withDepartmentPosition(EmployeeDepartmentPosition departmentPosition) {
        this.departmentPosition = departmentPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabilityDescription")
    public String disabilityDescription;
    public Employee withDisabilityDescription(String disabilityDescription) {
        this.disabilityDescription = disabilityDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emergencyContacts")
    public EmployeeEmergencyContacts[] emergencyContacts;
    public Employee withEmergencyContacts(EmployeeEmergencyContacts[] emergencyContacts) {
        this.emergencyContacts = emergencyContacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeId")
    public String employeeId;
    public Employee withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ethnicity")
    public String ethnicity;
    public Employee withEthnicity(String ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federalTax")
    public EmployeeFederalTax federalTax;
    public Employee withFederalTax(EmployeeFederalTax federalTax) {
        this.federalTax = federalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public Employee withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public Employee withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeAddress")
    public EmployeeHomeAddress homeAddress;
    public Employee withHomeAddress(EmployeeHomeAddress homeAddress) {
        this.homeAddress = homeAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isHighlyCompensated")
    public Boolean isHighlyCompensated;
    public Employee withIsHighlyCompensated(Boolean isHighlyCompensated) {
        this.isHighlyCompensated = isHighlyCompensated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSmoker")
    public Boolean isSmoker;
    public Employee withIsSmoker(Boolean isSmoker) {
        this.isSmoker = isSmoker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public Employee withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localTax")
    public EmployeeLocalTax[] localTax;
    public Employee withLocalTax(EmployeeLocalTax[] localTax) {
        this.localTax = localTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainDirectDeposit")
    public EmployeeMainDirectDeposit mainDirectDeposit;
    public Employee withMainDirectDeposit(EmployeeMainDirectDeposit mainDirectDeposit) {
        this.mainDirectDeposit = mainDirectDeposit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maritalStatus")
    public String maritalStatus;
    public Employee withMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middleName")
    public String middleName;
    public Employee withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonPrimaryStateTax")
    public EmployeeNonPrimaryStateTax nonPrimaryStateTax;
    public Employee withNonPrimaryStateTax(EmployeeNonPrimaryStateTax nonPrimaryStateTax) {
        this.nonPrimaryStateTax = nonPrimaryStateTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerPercent")
    public Double ownerPercent;
    public Employee withOwnerPercent(Double ownerPercent) {
        this.ownerPercent = ownerPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferredName")
    public String preferredName;
    public Employee withPreferredName(String preferredName) {
        this.preferredName = preferredName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryPayRate")
    public EmployeePrimaryPayRate primaryPayRate;
    public Employee withPrimaryPayRate(EmployeePrimaryPayRate primaryPayRate) {
        this.primaryPayRate = primaryPayRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryStateTax")
    public EmployeePrimaryStateTax primaryStateTax;
    public Employee withPrimaryStateTax(EmployeePrimaryStateTax primaryStateTax) {
        this.primaryStateTax = primaryStateTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorLastName")
    public String priorLastName;
    public Employee withPriorLastName(String priorLastName) {
        this.priorLastName = priorLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salutation")
    public String salutation;
    public Employee withSalutation(String salutation) {
        this.salutation = salutation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssn")
    public String ssn;
    public Employee withSsn(String ssn) {
        this.ssn = ssn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EmployeeStatus status;
    public Employee withStatus(EmployeeStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public Employee withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxSetup")
    public EmployeeTaxSetup taxSetup;
    public Employee withTaxSetup(EmployeeTaxSetup taxSetup) {
        this.taxSetup = taxSetup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("veteranDescription")
    public String veteranDescription;
    public Employee withVeteranDescription(String veteranDescription) {
        this.veteranDescription = veteranDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webTime")
    public EmployeeWebTime webTime;
    public Employee withWebTime(EmployeeWebTime webTime) {
        this.webTime = webTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workAddress")
    public EmployeeWorkAddress workAddress;
    public Employee withWorkAddress(EmployeeWorkAddress workAddress) {
        this.workAddress = workAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workEligibility")
    public EmployeeWorkEligibility workEligibility;
    public Employee withWorkEligibility(EmployeeWorkEligibility workEligibility) {
        this.workEligibility = workEligibility;
        return this;
    }
}