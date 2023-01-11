package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public PutCoursesContentIdMetadataCategoryPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}