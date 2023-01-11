package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoursesContentIdPermissionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public String contentId;
    public GetCoursesContentIdPermissionsPathParams withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}