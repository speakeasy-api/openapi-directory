package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app")
    public String app;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams withApp(String app) {
        this.app = app;
        return this;
    }
}