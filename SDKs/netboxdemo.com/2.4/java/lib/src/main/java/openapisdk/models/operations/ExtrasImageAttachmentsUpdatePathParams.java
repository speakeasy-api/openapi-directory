package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasImageAttachmentsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasImageAttachmentsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}