package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Coaching")
    public Boolean coaching;
    public ListParticipantQueryParams withCoaching(Boolean coaching) {
        this.coaching = coaching;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Hold")
    public Boolean hold;
    public ListParticipantQueryParams withHold(Boolean hold) {
        this.hold = hold;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Muted")
    public Boolean muted;
    public ListParticipantQueryParams withMuted(Boolean muted) {
        this.muted = muted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListParticipantQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}