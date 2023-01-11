package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PairwithSpeakerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PairwithSpeakerRequest request;
    public PairwithSpeakerRequest withRequest(openapisdk.models.shared.PairwithSpeakerRequest request) {
        this.request = request;
        return this;
    }
}