package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportingInstructionReportingInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndDate")
    public LocalDate endDate;
    public ReportingInstructionReportingInstruction withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartDate")
    public LocalDate startDate;
    public ReportingInstructionReportingInstruction withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxMonth")
    public Integer taxMonth;
    public ReportingInstructionReportingInstruction withTaxMonth(Integer taxMonth) {
        this.taxMonth = taxMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxYear")
    public Integer taxYear;
    public ReportingInstructionReportingInstruction withTaxYear(Integer taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public ReportingInstructionReportingInstruction withValue(Double value) {
        this.value = value;
        return this;
    }
}