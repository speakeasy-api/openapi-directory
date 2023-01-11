package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataLevelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public PutCoursesContentIdMetadataLevelPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}