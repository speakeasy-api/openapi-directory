package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MemcacheProjectsLocationsInstancesUpdateParametersSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public MemcacheProjectsLocationsInstancesUpdateParametersSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2c oauth2c;
    public MemcacheProjectsLocationsInstancesUpdateParametersSecurity withOauth2c(openapisdk.models.shared.SchemeOauth2c oauth2c) {
        this.oauth2c = oauth2c;
        return this;
    }
}