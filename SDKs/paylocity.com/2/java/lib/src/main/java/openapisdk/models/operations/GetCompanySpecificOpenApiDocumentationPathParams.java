package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCompanySpecificOpenApiDocumentationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetCompanySpecificOpenApiDocumentationPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
}