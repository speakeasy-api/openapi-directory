package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTlsRoutesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkservicesProjectsLocationsTlsRoutesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}