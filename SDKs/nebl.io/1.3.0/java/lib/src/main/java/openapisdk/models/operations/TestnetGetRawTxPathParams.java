package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetRawTxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=txid")
    public String txid;
    public TestnetGetRawTxPathParams withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}