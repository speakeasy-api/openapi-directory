package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitTranscriptionJobMultipartFormData {
    @SpeakeasyMetadata("multipartForm:file")
    public SubmitTranscriptionJobMultipartFormDataMedia media;
    public SubmitTranscriptionJobMultipartFormData withMedia(SubmitTranscriptionJobMultipartFormDataMedia media) {
        this.media = media;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=options,json")
    public openapisdk.models.shared.SubmitJobOptions options;
    public SubmitTranscriptionJobMultipartFormData withOptions(openapisdk.models.shared.SubmitJobOptions options) {
        this.options = options;
        return this;
    }
}