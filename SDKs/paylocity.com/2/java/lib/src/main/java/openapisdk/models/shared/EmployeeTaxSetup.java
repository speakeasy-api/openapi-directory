package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeTaxSetup
 * Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.
**/
public class EmployeeTaxSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fitwExemptNotes")
    public String fitwExemptNotes;
    public EmployeeTaxSetup withFitwExemptNotes(String fitwExemptNotes) {
        this.fitwExemptNotes = fitwExemptNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fitwExemptReason")
    public String fitwExemptReason;
    public EmployeeTaxSetup withFitwExemptReason(String fitwExemptReason) {
        this.fitwExemptReason = fitwExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("futaExemptNotes")
    public String futaExemptNotes;
    public EmployeeTaxSetup withFutaExemptNotes(String futaExemptNotes) {
        this.futaExemptNotes = futaExemptNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("futaExemptReason")
    public String futaExemptReason;
    public EmployeeTaxSetup withFutaExemptReason(String futaExemptReason) {
        this.futaExemptReason = futaExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEmployee943")
    public Boolean isEmployee943;
    public EmployeeTaxSetup withIsEmployee943(Boolean isEmployee943) {
        this.isEmployee943 = isEmployee943;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPension")
    public Boolean isPension;
    public EmployeeTaxSetup withIsPension(Boolean isPension) {
        this.isPension = isPension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isStatutory")
    public Boolean isStatutory;
    public EmployeeTaxSetup withIsStatutory(Boolean isStatutory) {
        this.isStatutory = isStatutory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medExemptNotes")
    public String medExemptNotes;
    public EmployeeTaxSetup withMedExemptNotes(String medExemptNotes) {
        this.medExemptNotes = medExemptNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medExemptReason")
    public String medExemptReason;
    public EmployeeTaxSetup withMedExemptReason(String medExemptReason) {
        this.medExemptReason = medExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sitwExemptNotes")
    public String sitwExemptNotes;
    public EmployeeTaxSetup withSitwExemptNotes(String sitwExemptNotes) {
        this.sitwExemptNotes = sitwExemptNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sitwExemptReason")
    public String sitwExemptReason;
    public EmployeeTaxSetup withSitwExemptReason(String sitwExemptReason) {
        this.sitwExemptReason = sitwExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssExemptNotes")
    public String ssExemptNotes;
    public EmployeeTaxSetup withSsExemptNotes(String ssExemptNotes) {
        this.ssExemptNotes = ssExemptNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssExemptReason")
    public String ssExemptReason;
    public EmployeeTaxSetup withSsExemptReason(String ssExemptReason) {
        this.ssExemptReason = ssExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiExemptNotes")
    public String suiExemptNotes;
    public EmployeeTaxSetup withSuiExemptNotes(String suiExemptNotes) {
        this.suiExemptNotes = suiExemptNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiExemptReason")
    public String suiExemptReason;
    public EmployeeTaxSetup withSuiExemptReason(String suiExemptReason) {
        this.suiExemptReason = suiExemptReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiState")
    public String suiState;
    public EmployeeTaxSetup withSuiState(String suiState) {
        this.suiState = suiState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxDistributionCode1099R")
    public String taxDistributionCode1099R;
    public EmployeeTaxSetup withTaxDistributionCode1099R(String taxDistributionCode1099R) {
        this.taxDistributionCode1099R = taxDistributionCode1099R;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxForm")
    public String taxForm;
    public EmployeeTaxSetup withTaxForm(String taxForm) {
        this.taxForm = taxForm;
        return this;
    }
}