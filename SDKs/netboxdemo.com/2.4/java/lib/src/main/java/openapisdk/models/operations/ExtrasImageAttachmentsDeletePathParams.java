package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasImageAttachmentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ExtrasImageAttachmentsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}