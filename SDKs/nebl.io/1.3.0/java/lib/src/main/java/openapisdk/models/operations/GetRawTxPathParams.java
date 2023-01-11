package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRawTxPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=txid")
    public String txid;
    public GetRawTxPathParams withTxid(String txid) {
        this.txid = txid;
        return this;
    }
}