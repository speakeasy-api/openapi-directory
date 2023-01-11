package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=txid")
    public String txid;
    public GetTxPathParams withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}