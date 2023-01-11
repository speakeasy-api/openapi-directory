package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListsNamesFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetListsNamesFormatFormatEnum format;
    public GetListsNamesFormatPathParams withFormat(GetListsNamesFormatFormatEnum format) {
        this.format = format;
        return this;
    }
}