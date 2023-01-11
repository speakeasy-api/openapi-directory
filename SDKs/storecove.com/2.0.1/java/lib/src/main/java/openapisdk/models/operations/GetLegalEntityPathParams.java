package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLegalEntityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetLegalEntityPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}