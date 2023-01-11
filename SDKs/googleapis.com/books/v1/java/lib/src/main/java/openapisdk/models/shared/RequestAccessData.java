package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RequestAccessData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrentAccess")
    public ConcurrentAccessRestriction concurrentAccess;
    public RequestAccessData withConcurrentAccess(ConcurrentAccessRestriction concurrentAccess) {
        this.concurrentAccess = concurrentAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadAccess")
    public DownloadAccessRestriction downloadAccess;
    public RequestAccessData withDownloadAccess(DownloadAccessRestriction downloadAccess) {
        this.downloadAccess = downloadAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RequestAccessData withKind(String kind) {
        this.kind = kind;
        return this;
    }
}