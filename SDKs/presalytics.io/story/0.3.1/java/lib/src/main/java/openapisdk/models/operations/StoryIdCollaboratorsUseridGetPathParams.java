package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsUseridGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdCollaboratorsUseridGetPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_collaborator_userid")
    public String storyCollaboratorUserid;
    public StoryIdCollaboratorsUseridGetPathParams withStoryCollaboratorUserid(String storyCollaboratorUserid) {
        this.storyCollaboratorUserid = storyCollaboratorUserid;
        return this;
    }
}