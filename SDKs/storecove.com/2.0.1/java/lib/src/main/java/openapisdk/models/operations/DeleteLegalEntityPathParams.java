package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLegalEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteLegalEntityPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}