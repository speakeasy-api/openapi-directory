package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}