package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsAuthorizedCertificatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsAuthorizedCertificatesListPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}