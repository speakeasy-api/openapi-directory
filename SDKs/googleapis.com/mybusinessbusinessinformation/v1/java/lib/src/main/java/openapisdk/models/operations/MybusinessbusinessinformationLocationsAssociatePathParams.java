package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessbusinessinformationLocationsAssociatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessbusinessinformationLocationsAssociatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}