package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificatesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CertificatemanagerProjectsLocationsCertificatesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}