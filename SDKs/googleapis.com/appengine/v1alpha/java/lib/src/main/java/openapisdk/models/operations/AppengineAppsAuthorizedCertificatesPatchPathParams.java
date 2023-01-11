package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineAppsAuthorizedCertificatesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=appsId")
    public String appsId;
    public AppengineAppsAuthorizedCertificatesPatchPathParams withAppsId(String appsId) {
        this.appsId = appsId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorizedCertificatesId")
    public String authorizedCertificatesId;
    public AppengineAppsAuthorizedCertificatesPatchPathParams withAuthorizedCertificatesId(String authorizedCertificatesId) {
        this.authorizedCertificatesId = authorizedCertificatesId;
        return this;
    }
}