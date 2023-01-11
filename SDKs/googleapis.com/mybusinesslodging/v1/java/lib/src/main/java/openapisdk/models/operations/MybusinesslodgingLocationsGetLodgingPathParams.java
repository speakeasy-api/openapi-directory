package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinesslodgingLocationsGetLodgingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinesslodgingLocationsGetLodgingPathParams withName(String name) {
        this.name = name;
        return this;
    }
}