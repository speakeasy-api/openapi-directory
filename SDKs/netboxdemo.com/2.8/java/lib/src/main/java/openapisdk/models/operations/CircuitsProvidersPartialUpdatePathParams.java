package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsProvidersPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CircuitsProvidersPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}