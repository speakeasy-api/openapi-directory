package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificatemanagerProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public CertificatemanagerProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}