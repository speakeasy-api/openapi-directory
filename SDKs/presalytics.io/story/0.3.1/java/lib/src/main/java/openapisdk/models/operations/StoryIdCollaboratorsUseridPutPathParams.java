package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsUseridPutPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdCollaboratorsUseridPutPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_collaborator_userid")
    public String storyCollaboratorUserid;
    public StoryIdCollaboratorsUseridPutPathParams withStoryCollaboratorUserid(String storyCollaboratorUserid) {
        this.storyCollaboratorUserid = storyCollaboratorUserid;
        return this;
    }
}