package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoursesContentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public GetCoursesContentIdPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}