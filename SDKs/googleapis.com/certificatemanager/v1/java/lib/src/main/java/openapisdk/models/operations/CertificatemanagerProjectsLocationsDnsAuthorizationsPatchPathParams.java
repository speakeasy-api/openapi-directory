package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}