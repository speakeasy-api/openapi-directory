package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesEnablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsCertificateAuthoritiesEnablePathParams withName(String name) {
        this.name = name;
        return this;
    }
}