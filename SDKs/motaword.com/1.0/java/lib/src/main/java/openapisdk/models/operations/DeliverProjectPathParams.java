package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeliverProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeliverProjectPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}