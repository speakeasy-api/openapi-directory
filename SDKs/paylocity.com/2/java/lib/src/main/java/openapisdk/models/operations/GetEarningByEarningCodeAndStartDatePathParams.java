package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEarningByEarningCodeAndStartDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetEarningByEarningCodeAndStartDatePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=earningCode")
    public String earningCode;
    public GetEarningByEarningCodeAndStartDatePathParams withEarningCode(String earningCode) {
        this.earningCode = earningCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetEarningByEarningCodeAndStartDatePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=startDate")
    public String startDate;
    public GetEarningByEarningCodeAndStartDatePathParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}