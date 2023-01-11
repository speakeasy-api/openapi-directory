package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdCollaboratorsUseridDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public StoryIdCollaboratorsUseridDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_collaborator_userid")
    public String storyCollaboratorUserid;
    public StoryIdCollaboratorsUseridDeletePathParams withStoryCollaboratorUserid(String storyCollaboratorUserid) {
        this.storyCollaboratorUserid = storyCollaboratorUserid;
        return this;
    }
}