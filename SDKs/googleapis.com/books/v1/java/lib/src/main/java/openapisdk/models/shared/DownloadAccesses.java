package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DownloadAccesses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadAccessList")
    public DownloadAccessRestriction[] downloadAccessList;
    public DownloadAccesses withDownloadAccessList(DownloadAccessRestriction[] downloadAccessList) {
        this.downloadAccessList = downloadAccessList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DownloadAccesses withKind(String kind) {
        this.kind = kind;
        return this;
    }
}