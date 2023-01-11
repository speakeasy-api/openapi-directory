package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TenancyTenantGroupsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}