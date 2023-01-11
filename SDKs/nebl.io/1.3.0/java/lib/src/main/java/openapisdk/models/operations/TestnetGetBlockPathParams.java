package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetBlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockhash")
    public String blockhash;
    public TestnetGetBlockPathParams withBlockhash(String blockhash) {
        this.blockhash = blockhash;
        return this;
    }
}