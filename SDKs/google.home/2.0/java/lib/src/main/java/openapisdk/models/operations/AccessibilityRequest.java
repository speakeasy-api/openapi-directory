package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessibilityRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AccessibilityRequest request;
    public AccessibilityRequest withRequest(openapisdk.models.shared.AccessibilityRequest request) {
        this.request = request;
        return this;
    }
}