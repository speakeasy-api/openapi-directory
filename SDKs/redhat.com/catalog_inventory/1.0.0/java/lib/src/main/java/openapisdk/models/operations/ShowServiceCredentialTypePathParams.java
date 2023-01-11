package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShowServiceCredentialTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ShowServiceCredentialTypePathParams withId(String id) {
        this.id = id;
        return this;
    }
}