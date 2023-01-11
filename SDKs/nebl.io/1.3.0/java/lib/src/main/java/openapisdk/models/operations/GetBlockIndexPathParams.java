package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockindex")
    public Double blockindex;
    public GetBlockIndexPathParams withBlockindex(Double blockindex) {
        this.blockindex = blockindex;
        return this;
    }
}