package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=blockhash")
    public String blockhash;
    public GetBlockPathParams withBlockhash(String blockhash) {
        this.blockhash = blockhash;
        return this;
    }
}