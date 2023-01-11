package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PrivatecaProjectsLocationsCertificateAuthoritiesScheduleDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}