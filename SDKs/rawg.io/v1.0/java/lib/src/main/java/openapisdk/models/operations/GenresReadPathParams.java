package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenresReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GenresReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}