package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCaptionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public openapisdk.models.shared.AcceptCaptionEnum accept;
    public GetCaptionsHeaders withAccept(openapisdk.models.shared.AcceptCaptionEnum accept) {
        this.accept = accept;
        return this;
    }
}