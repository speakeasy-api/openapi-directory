package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetBlockIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockindex")
    public Double blockindex;
    public TestnetGetBlockIndexPathParams withBlockindex(Double blockindex) {
        this.blockindex = blockindex;
        return this;
    }
}