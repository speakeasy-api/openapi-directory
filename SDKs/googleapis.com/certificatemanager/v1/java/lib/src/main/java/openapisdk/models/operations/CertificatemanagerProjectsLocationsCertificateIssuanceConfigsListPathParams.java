package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CertificatemanagerProjectsLocationsCertificateIssuanceConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}