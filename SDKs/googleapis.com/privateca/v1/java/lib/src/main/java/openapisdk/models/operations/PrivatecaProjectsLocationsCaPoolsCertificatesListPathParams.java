package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificatesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public PrivatecaProjectsLocationsCaPoolsCertificatesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}