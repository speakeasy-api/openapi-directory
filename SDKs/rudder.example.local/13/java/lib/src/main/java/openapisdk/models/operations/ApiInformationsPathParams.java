package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApiInformationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=endpointName")
    public String endpointName;
    public ApiInformationsPathParams withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
}