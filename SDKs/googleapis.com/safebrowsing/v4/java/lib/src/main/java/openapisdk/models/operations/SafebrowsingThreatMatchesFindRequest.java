package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SafebrowsingThreatMatchesFindRequest {
    public SafebrowsingThreatMatchesFindQueryParams queryParams;
    public SafebrowsingThreatMatchesFindRequest withQueryParams(SafebrowsingThreatMatchesFindQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindThreatMatchesRequest request;
    public SafebrowsingThreatMatchesFindRequest withRequest(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FindThreatMatchesRequest request) {
        this.request = request;
        return this;
    }
}