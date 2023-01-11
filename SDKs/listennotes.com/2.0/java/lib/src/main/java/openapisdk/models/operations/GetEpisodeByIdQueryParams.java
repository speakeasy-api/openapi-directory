package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodeByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=show_transcript")
    public Long showTranscript;
    public GetEpisodeByIdQueryParams withShowTranscript(Long showTranscript) {
        this.showTranscript = showTranscript;
        return this;
    }
}