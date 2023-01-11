package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCoursesRootContentIdPermissionsUserEmailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rootContentId")
    public String rootContentId;
    public PostCoursesRootContentIdPermissionsUserEmailPathParams withRootContentId(String rootContentId) {
        this.rootContentId = rootContentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userEmail")
    public String userEmail;
    public PostCoursesRootContentIdPermissionsUserEmailPathParams withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}