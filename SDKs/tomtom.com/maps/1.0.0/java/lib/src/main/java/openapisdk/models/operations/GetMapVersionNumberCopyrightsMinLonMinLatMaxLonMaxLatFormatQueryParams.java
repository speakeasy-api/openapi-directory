package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
}