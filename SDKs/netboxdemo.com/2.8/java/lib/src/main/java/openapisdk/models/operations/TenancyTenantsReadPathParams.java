package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TenancyTenantsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}