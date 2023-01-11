package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNewEmployeeToWebLinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public AddNewEmployeeToWebLinkPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
}