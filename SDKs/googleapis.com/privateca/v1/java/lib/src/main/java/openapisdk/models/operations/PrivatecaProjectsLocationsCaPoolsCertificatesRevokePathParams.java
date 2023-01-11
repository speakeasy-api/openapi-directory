package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCertificatesRevokePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsCaPoolsCertificatesRevokePathParams withName(String name) {
        this.name = name;
        return this;
    }
}