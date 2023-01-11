package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesGetEventPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_id")
    public Long eventId;
    public IssuesGetEventPathParams withEventId(Long eventId) {
        this.eventId = eventId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesGetEventPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesGetEventPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}