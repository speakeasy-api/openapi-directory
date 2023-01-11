package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddEmployeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public AddEmployeePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
}