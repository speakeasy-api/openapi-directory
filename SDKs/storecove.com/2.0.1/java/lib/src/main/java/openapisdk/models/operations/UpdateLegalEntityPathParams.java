package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLegalEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdateLegalEntityPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}