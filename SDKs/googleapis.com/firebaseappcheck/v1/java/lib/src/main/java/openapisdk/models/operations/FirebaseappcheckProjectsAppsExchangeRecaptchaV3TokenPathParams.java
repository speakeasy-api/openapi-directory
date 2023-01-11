package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app")
    public String app;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams withApp(String app) {
        this.app = app;
        return this;
    }
}