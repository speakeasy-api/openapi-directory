package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=year")
    public String year;
    public GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams withYear(String year) {
        this.year = year;
        return this;
    }
}