package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app")
    public String app;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams withApp(String app) {
        this.app = app;
        return this;
    }
}