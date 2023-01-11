package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationLocationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessbusinessinformationLocationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}