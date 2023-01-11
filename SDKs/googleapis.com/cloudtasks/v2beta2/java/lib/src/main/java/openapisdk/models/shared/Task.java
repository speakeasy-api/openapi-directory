package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Task
 * A unit of scheduled work.
**/
public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineHttpRequest")
    public AppEngineHttpRequest appEngineHttpRequest;
    public Task withAppEngineHttpRequest(AppEngineHttpRequest appEngineHttpRequest) {
        this.appEngineHttpRequest = appEngineHttpRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Task withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpRequest")
    public HttpRequest httpRequest;
    public Task withHttpRequest(HttpRequest httpRequest) {
        this.httpRequest = httpRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Task withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullMessage")
    public PullMessage pullMessage;
    public Task withPullMessage(PullMessage pullMessage) {
        this.pullMessage = pullMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public Task withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TaskStatus status;
    public Task withStatus(TaskStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public TaskViewEnum view;
    public Task withView(TaskViewEnum view) {
        this.view = view;
        return this;
    }
}