package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SafebrowsingThreatListUpdatesFetchRequest {
    public SafebrowsingThreatListUpdatesFetchQueryParams queryParams;
    public SafebrowsingThreatListUpdatesFetchRequest withQueryParams(SafebrowsingThreatListUpdatesFetchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest request;
    public SafebrowsingThreatListUpdatesFetchRequest withRequest(openapisdk.models.shared.GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest request) {
        this.request = request;
        return this;
    }
}