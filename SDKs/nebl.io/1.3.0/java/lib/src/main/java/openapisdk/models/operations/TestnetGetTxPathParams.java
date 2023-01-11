package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=txid")
    public String txid;
    public TestnetGetTxPathParams withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}