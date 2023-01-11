package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public PutCoursesContentIdMetadataTagsPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}