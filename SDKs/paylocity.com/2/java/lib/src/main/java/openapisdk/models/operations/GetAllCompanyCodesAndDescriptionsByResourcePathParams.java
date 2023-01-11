package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllCompanyCodesAndDescriptionsByResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=codeResource")
    public String codeResource;
    public GetAllCompanyCodesAndDescriptionsByResourcePathParams withCodeResource(String codeResource) {
        this.codeResource = codeResource;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetAllCompanyCodesAndDescriptionsByResourcePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
}