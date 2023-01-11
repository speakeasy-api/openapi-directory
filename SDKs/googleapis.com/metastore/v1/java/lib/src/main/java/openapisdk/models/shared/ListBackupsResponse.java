package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBackupsResponse
 * Response message for DataprocMetastore.ListBackups.
**/
public class ListBackupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backups")
    public Backup[] backups;
    public ListBackupsResponse withBackups(Backup[] backups) {
        this.backups = backups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBackupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListBackupsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}