package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFloatingIpsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutFloatingIpsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}