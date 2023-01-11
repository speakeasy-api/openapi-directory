package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEarningsByEarningCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetEarningsByEarningCodePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=earningCode")
    public String earningCode;
    public GetEarningsByEarningCodePathParams withEarningCode(String earningCode) {
        this.earningCode = earningCode;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetEarningsByEarningCodePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}