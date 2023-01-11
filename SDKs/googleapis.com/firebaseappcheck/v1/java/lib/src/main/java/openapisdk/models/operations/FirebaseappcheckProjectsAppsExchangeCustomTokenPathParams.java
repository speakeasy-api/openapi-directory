package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeCustomTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app")
    public String app;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenPathParams withApp(String app) {
        this.app = app;
        return this;
    }
}