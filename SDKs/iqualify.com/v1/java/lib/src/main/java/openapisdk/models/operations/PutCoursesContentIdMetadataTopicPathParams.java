package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCoursesContentIdMetadataTopicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public PutCoursesContentIdMetadataTopicPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}