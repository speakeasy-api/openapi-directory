package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEngineHttpTarget
 * App Engine HTTP target. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpTarget and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpTarget requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`
**/
public class AppEngineHttpTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineRoutingOverride")
    public AppEngineRouting appEngineRoutingOverride;
    public AppEngineHttpTarget withAppEngineRoutingOverride(AppEngineRouting appEngineRoutingOverride) {
        this.appEngineRoutingOverride = appEngineRoutingOverride;
        return this;
    }
}