package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GistCommit
 * Gist Commit
**/
public class GistCommit {
    @JsonProperty("change_status")
    public GistCommitChangeStatus changeStatus;
    public GistCommit withChangeStatus(GistCommitChangeStatus changeStatus) {
        this.changeStatus = changeStatus;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("committed_at")
    public OffsetDateTime committedAt;
    public GistCommit withCommittedAt(OffsetDateTime committedAt) {
        this.committedAt = committedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GistCommit withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("user")
    public GistCommitSimpleUser user;
    public GistCommit withUser(GistCommitSimpleUser user) {
        this.user = user;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public GistCommit withVersion(String version) {
        this.version = version;
        return this;
    }
}