package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitTranscriptionJobRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitJobMediaUrlOptions submitJobMediaUrlOptions;
    public SubmitTranscriptionJobRequests withSubmitJobMediaUrlOptions(openapisdk.models.shared.SubmitJobMediaUrlOptions submitJobMediaUrlOptions) {
        this.submitJobMediaUrlOptions = submitJobMediaUrlOptions;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SubmitTranscriptionJobMultipartFormData object;
    public SubmitTranscriptionJobRequests withObject(SubmitTranscriptionJobMultipartFormData object) {
        this.object = object;
        return this;
    }
}