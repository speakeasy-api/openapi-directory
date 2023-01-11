package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesLanguagesIdJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourcesLanguagesIdJsonPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}