package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessverificationsLocationsVerificationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MybusinessverificationsLocationsVerificationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}