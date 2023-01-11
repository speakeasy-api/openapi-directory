package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2c oauth2c;
    public CertificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesListSecurity withOauth2c(openapisdk.models.shared.SchemeOauth2c oauth2c) {
        this.oauth2c = oauth2c;
        return this;
    }
}