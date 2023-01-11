package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenMetadataOfUtxoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenid")
    public String tokenid;
    public GetTokenMetadataOfUtxoPathParams withTokenid(String tokenid) {
        this.tokenid = tokenid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=utxo")
    public String utxo;
    public GetTokenMetadataOfUtxoPathParams withUtxo(String utxo) {
        this.utxo = utxo;
        return this;
    }
}