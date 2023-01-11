package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetGetTokenMetadataOfUtxoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tokenid")
    public String tokenid;
    public TestnetGetTokenMetadataOfUtxoPathParams withTokenid(String tokenid) {
        this.tokenid = tokenid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=utxo")
    public String utxo;
    public TestnetGetTokenMetadataOfUtxoPathParams withUtxo(String utxo) {
        this.utxo = utxo;
        return this;
    }
}