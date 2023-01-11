package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinLookupRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public BinLookupRequestBody request;
    public BinLookupRequest withRequest(BinLookupRequestBody request) {
        this.request = request;
        return this;
    }
}