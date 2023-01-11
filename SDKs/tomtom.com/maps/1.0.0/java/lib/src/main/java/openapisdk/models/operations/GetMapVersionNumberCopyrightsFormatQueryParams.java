package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberCopyrightsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMapVersionNumberCopyrightsFormatQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
}