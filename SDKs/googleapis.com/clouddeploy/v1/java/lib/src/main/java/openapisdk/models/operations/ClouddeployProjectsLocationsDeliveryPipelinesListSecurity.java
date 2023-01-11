package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClouddeployProjectsLocationsDeliveryPipelinesListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public ClouddeployProjectsLocationsDeliveryPipelinesListSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2c oauth2c;
    public ClouddeployProjectsLocationsDeliveryPipelinesListSecurity withOauth2c(openapisdk.models.shared.SchemeOauth2c oauth2c) {
        this.oauth2c = oauth2c;
        return this;
    }
}