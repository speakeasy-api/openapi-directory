package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SasportalNodesDevicesUpdateSignedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public SasportalNodesDevicesUpdateSignedPathParams withName(String name) {
        this.name = name;
        return this;
    }
}