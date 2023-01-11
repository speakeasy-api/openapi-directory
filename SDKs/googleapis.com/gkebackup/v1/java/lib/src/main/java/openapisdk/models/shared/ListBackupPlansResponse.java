package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBackupPlansResponse
 * Response message for ListBackupPlans.
**/
public class ListBackupPlansResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupPlans")
    public BackupPlan[] backupPlans;
    public ListBackupPlansResponse withBackupPlans(BackupPlan[] backupPlans) {
        this.backupPlans = backupPlans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListBackupPlansResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListBackupPlansResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}