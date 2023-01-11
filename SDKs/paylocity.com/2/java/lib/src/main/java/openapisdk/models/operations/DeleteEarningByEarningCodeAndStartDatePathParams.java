package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEarningByEarningCodeAndStartDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public DeleteEarningByEarningCodeAndStartDatePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=earningCode")
    public String earningCode;
    public DeleteEarningByEarningCodeAndStartDatePathParams withEarningCode(String earningCode) {
        this.earningCode = earningCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public DeleteEarningByEarningCodeAndStartDatePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=startDate")
    public String startDate;
    public DeleteEarningByEarningCodeAndStartDatePathParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}