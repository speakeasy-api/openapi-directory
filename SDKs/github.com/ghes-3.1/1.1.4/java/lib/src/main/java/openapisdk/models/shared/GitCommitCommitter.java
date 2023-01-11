package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GitCommitCommitter
 * Identifying information for the git-user
**/
public class GitCommitCommitter {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public GitCommitCommitter withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public GitCommitCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GitCommitCommitter withName(String name) {
        this.name = name;
        return this;
    }
}