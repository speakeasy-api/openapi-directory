package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetActivePayInstructionsReportOutputQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ActiveOn")
    public LocalDate activeOn;
    public GetActivePayInstructionsReportOutputQueryParams withActiveOn(LocalDate activeOn) {
        this.activeOn = activeOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployeeKey")
    public String employeeKey;
    public GetActivePayInstructionsReportOutputQueryParams withEmployeeKey(String employeeKey) {
        this.employeeKey = employeeKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetActivePayInstructionsReportOutputQueryParams withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FromDate")
    public LocalDate fromDate;
    public GetActivePayInstructionsReportOutputQueryParams withFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ToDate")
    public LocalDate toDate;
    public GetActivePayInstructionsReportOutputQueryParams withToDate(LocalDate toDate) {
        this.toDate = toDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Type")
    public String type;
    public GetActivePayInstructionsReportOutputQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}