package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app")
    public String app;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams withApp(String app) {
        this.app = app;
        return this;
    }
}