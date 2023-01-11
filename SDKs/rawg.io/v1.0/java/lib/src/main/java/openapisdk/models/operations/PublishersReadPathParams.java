package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PublishersReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}