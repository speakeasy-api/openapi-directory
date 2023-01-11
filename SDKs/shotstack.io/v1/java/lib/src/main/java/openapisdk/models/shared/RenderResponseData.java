package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RenderResponseData
 * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
**/
public class RenderResponseData {
    @JsonProperty("created")
    public String created;
    public RenderResponseData withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonProperty("data")
    public Edit data;
    public RenderResponseData withData(Edit data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Double duration;
    public RenderResponseData withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public RenderResponseData withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public RenderResponseData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("owner")
    public String owner;
    public RenderResponseData withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public String plan;
    public RenderResponseData withPlan(String plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poster")
    public String poster;
    public RenderResponseData withPoster(String poster) {
        this.poster = poster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderTime")
    public Double renderTime;
    public RenderResponseData withRenderTime(Double renderTime) {
        this.renderTime = renderTime;
        return this;
    }
    @JsonProperty("status")
    public RenderResponseDataStatusEnum status;
    public RenderResponseData withStatus(RenderResponseDataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public RenderResponseData withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonProperty("updated")
    public String updated;
    public RenderResponseData withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public RenderResponseData withUrl(String url) {
        this.url = url;
        return this;
    }
}