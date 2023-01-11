package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCaptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=speaker_channel")
    public Long speakerChannel;
    public GetCaptionsQueryParams withSpeakerChannel(Long speakerChannel) {
        this.speakerChannel = speakerChannel;
        return this;
    }
}