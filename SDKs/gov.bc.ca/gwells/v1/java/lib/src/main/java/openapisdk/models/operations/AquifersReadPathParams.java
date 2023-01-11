package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AquifersReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aquifer_id")
    public Long aquiferId;
    public AquifersReadPathParams withAquiferId(Long aquiferId) {
        this.aquiferId = aquiferId;
        return this;
    }
}