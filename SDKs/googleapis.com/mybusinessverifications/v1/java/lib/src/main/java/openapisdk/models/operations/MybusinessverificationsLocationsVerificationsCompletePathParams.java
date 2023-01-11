package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsVerificationsCompletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessverificationsLocationsVerificationsCompletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}