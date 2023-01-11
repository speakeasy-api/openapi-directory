package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CircuitsProvidersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CircuitsProvidersUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}