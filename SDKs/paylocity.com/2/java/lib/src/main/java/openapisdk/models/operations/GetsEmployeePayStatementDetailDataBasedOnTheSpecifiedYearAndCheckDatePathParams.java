package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=checkDate")
    public String checkDate;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public String year;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearAndCheckDatePathParams withYear(String year) {
        this.year = year;
        return this;
    }
}