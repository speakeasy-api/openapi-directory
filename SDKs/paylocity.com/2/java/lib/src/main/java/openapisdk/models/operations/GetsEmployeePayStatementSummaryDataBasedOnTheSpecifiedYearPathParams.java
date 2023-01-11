package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public String year;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams withYear(String year) {
        this.year = year;
        return this;
    }
}