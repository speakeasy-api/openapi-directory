package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowServiceCredentialPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowServiceCredentialPathParams withId(String id) {
        this.id = id;
        return this;
    }
}