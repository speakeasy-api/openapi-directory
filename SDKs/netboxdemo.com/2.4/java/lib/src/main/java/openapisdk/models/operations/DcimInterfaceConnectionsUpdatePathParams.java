package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceConnectionsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInterfaceConnectionsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}