package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAttributesComputedIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutAttributesComputedIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}