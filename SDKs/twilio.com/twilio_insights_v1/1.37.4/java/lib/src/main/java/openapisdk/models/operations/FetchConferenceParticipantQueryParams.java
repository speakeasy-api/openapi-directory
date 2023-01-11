package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchConferenceParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Events")
    public String events;
    public FetchConferenceParticipantQueryParams withEvents(String events) {
        this.events = events;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Metrics")
    public String metrics;
    public FetchConferenceParticipantQueryParams withMetrics(String metrics) {
        this.metrics = metrics;
        return this;
    }
}