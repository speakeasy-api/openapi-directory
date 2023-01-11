package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUsersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutUsersIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}