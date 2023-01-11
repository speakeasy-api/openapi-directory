package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesTagsTagLanguagesFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public String format;
    public GetResourcesTagsTagLanguagesFormatPathParams withFormat(String format) {
        this.format = format;
        return this;
    }
}