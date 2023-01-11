package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSectionFormatQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
}