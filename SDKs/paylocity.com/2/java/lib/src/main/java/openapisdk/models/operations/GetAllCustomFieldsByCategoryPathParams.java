package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllCustomFieldsByCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category")
    public String category;
    public GetAllCustomFieldsByCategoryPathParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetAllCustomFieldsByCategoryPathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
}