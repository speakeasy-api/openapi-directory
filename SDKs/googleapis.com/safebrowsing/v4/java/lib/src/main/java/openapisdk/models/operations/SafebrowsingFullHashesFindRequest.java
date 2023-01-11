package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SafebrowsingFullHashesFindRequest {
    public SafebrowsingFullHashesFindQueryParams queryParams;
    public SafebrowsingFullHashesFindRequest withQueryParams(SafebrowsingFullHashesFindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesRequest request;
    public SafebrowsingFullHashesFindRequest withRequest(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindFullHashesRequest request) {
        this.request = request;
        return this;
    }
}