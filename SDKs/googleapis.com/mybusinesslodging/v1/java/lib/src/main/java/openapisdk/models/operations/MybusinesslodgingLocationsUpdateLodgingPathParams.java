package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinesslodgingLocationsUpdateLodgingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinesslodgingLocationsUpdateLodgingPathParams withName(String name) {
        this.name = name;
        return this;
    }
}