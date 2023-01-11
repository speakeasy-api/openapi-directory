package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class TopupRequest {
    @SpeakeasyMetadata("form:name=trx")
    public String trx;
    public TopupRequest withTrx(String trx) {
        this.trx = trx;
        return this;
    }
}