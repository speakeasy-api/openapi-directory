package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsloginUsersGetLoginProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public OsloginUsersGetLoginProfilePathParams withName(String name) {
        this.name = name;
        return this;
    }
}