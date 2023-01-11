package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoursesContentIdActivationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public GetCoursesContentIdActivationsPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}