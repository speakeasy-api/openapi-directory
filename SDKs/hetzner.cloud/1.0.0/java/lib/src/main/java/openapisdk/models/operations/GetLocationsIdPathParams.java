package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetLocationsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}