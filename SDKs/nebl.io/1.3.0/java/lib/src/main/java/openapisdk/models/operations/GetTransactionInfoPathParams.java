package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionInfoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=txid")
    public String txid;
    public GetTransactionInfoPathParams withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}