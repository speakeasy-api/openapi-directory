package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CertificatemanagerProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}