package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CacheNonceGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nonce")
    public String nonce;
    public CacheNonceGetPathParams withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
}