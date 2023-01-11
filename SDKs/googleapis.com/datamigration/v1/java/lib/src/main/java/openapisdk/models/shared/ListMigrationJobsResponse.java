package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMigrationJobsResponse
 * Response message for 'ListMigrationJobs' request.
**/
public class ListMigrationJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migrationJobs")
    public MigrationJob[] migrationJobs;
    public ListMigrationJobsResponse withMigrationJobs(MigrationJob[] migrationJobs) {
        this.migrationJobs = migrationJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMigrationJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListMigrationJobsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}