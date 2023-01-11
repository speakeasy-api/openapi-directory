package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantGroupsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TenancyTenantGroupsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}