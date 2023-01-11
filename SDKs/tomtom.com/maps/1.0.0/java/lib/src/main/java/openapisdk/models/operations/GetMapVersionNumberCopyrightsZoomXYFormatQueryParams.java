package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberCopyrightsZoomXYFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMapVersionNumberCopyrightsZoomXYFormatQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
}