package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerAccountsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public AdexchangebuyerAccountsGetPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}