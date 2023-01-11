package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=checkDate")
    public String checkDate;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public String year;
    public GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams withYear(String year) {
        this.year = year;
        return this;
    }
}