package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerAccountsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public AdexchangebuyerAccountsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}