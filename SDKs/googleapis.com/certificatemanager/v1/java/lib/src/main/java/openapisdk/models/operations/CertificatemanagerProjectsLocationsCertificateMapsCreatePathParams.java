package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}