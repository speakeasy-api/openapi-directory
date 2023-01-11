package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFloatingIpsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetFloatingIpsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}