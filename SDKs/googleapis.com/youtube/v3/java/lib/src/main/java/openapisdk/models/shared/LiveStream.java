package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LiveStream
 * A live stream describes a live ingestion point.
**/
public class LiveStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cdn")
    public CdnSettings cdn;
    public LiveStream withCdn(CdnSettings cdn) {
        this.cdn = cdn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public LiveStreamContentDetails contentDetails;
    public LiveStream withContentDetails(LiveStreamContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public LiveStream withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LiveStream withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiveStream withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public LiveStreamSnippet snippet;
    public LiveStream withSnippet(LiveStreamSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LiveStreamStatus status;
    public LiveStream withStatus(LiveStreamStatus status) {
        this.status = status;
        return this;
    }
}