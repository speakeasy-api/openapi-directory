package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFloatingIpsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteFloatingIpsIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}