package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PolyUsersLikedassetsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PolyUsersLikedassetsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}