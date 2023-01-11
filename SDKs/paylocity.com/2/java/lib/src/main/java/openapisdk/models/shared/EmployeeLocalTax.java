package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeLocalTax
 * The Local Tax model
**/
public class EmployeeLocalTax {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions")
    public Double exemptions;
    public EmployeeLocalTax withExemptions(Double exemptions) {
        this.exemptions = exemptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemptions2")
    public Double exemptions2;
    public EmployeeLocalTax withExemptions2(Double exemptions2) {
        this.exemptions2 = exemptions2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filingStatus")
    public String filingStatus;
    public EmployeeLocalTax withFilingStatus(String filingStatus) {
        this.filingStatus = filingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("residentPSD")
    public String residentPSD;
    public EmployeeLocalTax withResidentPsd(String residentPSD) {
        this.residentPSD = residentPSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxCode")
    public String taxCode;
    public EmployeeLocalTax withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workPSD")
    public String workPSD;
    public EmployeeLocalTax withWorkPsd(String workPSD) {
        this.workPSD = workPSD;
        return this;
    }
}