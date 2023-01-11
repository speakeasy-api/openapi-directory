package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTranscriptByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public openapisdk.models.shared.AcceptTranscriptEnum accept;
    public GetTranscriptByIdHeaders withAccept(openapisdk.models.shared.AcceptTranscriptEnum accept) {
        this.accept = accept;
        return this;
    }
}