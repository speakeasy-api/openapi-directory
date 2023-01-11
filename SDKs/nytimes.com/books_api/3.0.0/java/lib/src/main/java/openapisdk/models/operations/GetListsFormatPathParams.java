package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetListsFormatFormatEnum format;
    public GetListsFormatPathParams withFormat(GetListsFormatFormatEnum format) {
        this.format = format;
        return this;
    }
}