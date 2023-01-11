package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasImageAttachmentsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasImageAttachmentsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}