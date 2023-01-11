package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConferenceParticipantPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConferenceSid")
    public String conferenceSid;
    public ListConferenceParticipantPathParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
}