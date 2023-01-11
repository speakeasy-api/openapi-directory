package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsAuthorizedCertificatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsAuthorizedCertificatesCreatePathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
}