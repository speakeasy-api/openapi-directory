package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceConnectionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInterfaceConnectionsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}