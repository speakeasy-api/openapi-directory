package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EurekaInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nonce")
    public Integer nonce;
    public EurekaInfoQueryParams withNonce(Integer nonce) {
        this.nonce = nonce;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=options")
    public String options;
    public EurekaInfoQueryParams withOptions(String options) {
        this.options = options;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=params")
    public String params;
    public EurekaInfoQueryParams withParams(String params) {
        this.params = params;
        return this;
    }
}