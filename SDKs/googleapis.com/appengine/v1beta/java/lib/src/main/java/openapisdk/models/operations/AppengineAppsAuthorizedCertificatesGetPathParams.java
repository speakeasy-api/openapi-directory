package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsAuthorizedCertificatesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsAuthorizedCertificatesGetPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizedCertificatesId")
    public String authorizedCertificatesId;
    public AppengineAppsAuthorizedCertificatesGetPathParams withAuthorizedCertificatesId(String authorizedCertificatesId) {
        this.authorizedCertificatesId = authorizedCertificatesId;
        return this;
    }
}