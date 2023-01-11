package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateValidateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;
    public CertificateValidateHeaders withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
}