package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SafebrowsingThreatHitsCreateRequest {
    public SafebrowsingThreatHitsCreateQueryParams queryParams;
    public SafebrowsingThreatHitsCreateRequest withQueryParams(SafebrowsingThreatHitsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleSecuritySafebrowsingV4ThreatHit request;
    public SafebrowsingThreatHitsCreateRequest withRequest(openapisdk.models.shared.GoogleSecuritySafebrowsingV4ThreatHit request) {
        this.request = request;
        return this;
    }
}