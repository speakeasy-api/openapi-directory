package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTransactionInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=txid")
    public String txid;
    public TestnetGetTransactionInfoPathParams withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}