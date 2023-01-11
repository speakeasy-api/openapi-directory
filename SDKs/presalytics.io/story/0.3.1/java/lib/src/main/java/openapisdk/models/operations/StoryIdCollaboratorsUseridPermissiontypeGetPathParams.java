package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsUseridPermissiontypeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdCollaboratorsUseridPermissiontypeGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permissiontype")
    public String permissiontype;
    public StoryIdCollaboratorsUseridPermissiontypeGetPathParams withPermissiontype(String permissiontype) {
        this.permissiontype = permissiontype;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_collaborator_userid")
    public String storyCollaboratorUserid;
    public StoryIdCollaboratorsUseridPermissiontypeGetPathParams withStoryCollaboratorUserid(String storyCollaboratorUserid) {
        this.storyCollaboratorUserid = storyCollaboratorUserid;
        return this;
    }
}