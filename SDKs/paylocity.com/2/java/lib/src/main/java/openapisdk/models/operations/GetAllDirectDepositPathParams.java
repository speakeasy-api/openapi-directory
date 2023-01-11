package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllDirectDepositPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetAllDirectDepositPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetAllDirectDepositPathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}