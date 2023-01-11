package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateMapsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CertificatemanagerProjectsLocationsCertificateMapsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}