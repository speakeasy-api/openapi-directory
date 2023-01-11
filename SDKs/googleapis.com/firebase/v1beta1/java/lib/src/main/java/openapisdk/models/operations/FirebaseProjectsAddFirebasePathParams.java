package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseProjectsAddFirebasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public FirebaseProjectsAddFirebasePathParams withProject(String project) {
        this.project = project;
        return this;
    }
}