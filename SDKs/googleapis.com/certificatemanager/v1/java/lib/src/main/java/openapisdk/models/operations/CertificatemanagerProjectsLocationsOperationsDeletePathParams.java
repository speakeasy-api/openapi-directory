package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CertificatemanagerProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}