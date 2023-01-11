package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConferenceParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Events")
    public String events;
    public ListConferenceParticipantQueryParams withEvents(String events) {
        this.events = events;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Label")
    public String label;
    public ListConferenceParticipantQueryParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConferenceParticipantQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ParticipantSid")
    public String participantSid;
    public ListConferenceParticipantQueryParams withParticipantSid(String participantSid) {
        this.participantSid = participantSid;
        return this;
    }
}