package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DevelopersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DevelopersReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}