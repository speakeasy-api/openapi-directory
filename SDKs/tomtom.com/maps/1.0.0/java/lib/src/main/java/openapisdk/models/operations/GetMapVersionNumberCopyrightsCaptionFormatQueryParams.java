package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberCopyrightsCaptionFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMapVersionNumberCopyrightsCaptionFormatQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
}