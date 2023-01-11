package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IpamChoicesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public IpamChoicesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}