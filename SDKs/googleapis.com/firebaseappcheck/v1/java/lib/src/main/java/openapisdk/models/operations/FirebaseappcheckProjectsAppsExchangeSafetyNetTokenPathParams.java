package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app")
    public String app;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams withApp(String app) {
        this.app = app;
        return this;
    }
}