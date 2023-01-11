package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TenancyTenantsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TenancyTenantsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}