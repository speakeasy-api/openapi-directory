package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NetworkservicesProjectsLocationsTlsRoutesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NetworkservicesProjectsLocationsTlsRoutesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}