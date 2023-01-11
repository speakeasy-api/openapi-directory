package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllEmployeesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetAllEmployeesPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
}