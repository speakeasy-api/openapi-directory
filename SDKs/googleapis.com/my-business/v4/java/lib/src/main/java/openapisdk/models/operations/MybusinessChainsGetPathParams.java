package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MybusinessChainsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MybusinessChainsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}