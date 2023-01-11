package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateCreateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Market-Id")
    public String xMarketId;
    public CertificateCreateHeaders withXMarketId(String xMarketId) {
        this.xMarketId = xMarketId;
        return this;
    }
}