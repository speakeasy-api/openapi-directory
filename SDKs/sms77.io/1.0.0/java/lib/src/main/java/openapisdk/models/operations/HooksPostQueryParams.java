package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HooksPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public HooksPostActionEnum action;
    public HooksPostQueryParams withAction(HooksPostActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=event_type")
    public HooksPostEventTypeEnum eventType;
    public HooksPostQueryParams withEventType(HooksPostEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Long id;
    public HooksPostQueryParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=request_method")
    public HooksPostRequestMethodEnum requestMethod;
    public HooksPostQueryParams withRequestMethod(HooksPostRequestMethodEnum requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_url")
    public String targetUrl;
    public HooksPostQueryParams withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}