package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConferenceSid")
    public String conferenceSid;
    public FetchConferencePathParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
}