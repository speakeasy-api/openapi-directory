package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}