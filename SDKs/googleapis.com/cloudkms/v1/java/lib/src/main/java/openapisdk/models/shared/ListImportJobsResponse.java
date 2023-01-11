package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListImportJobsResponse
 * Response message for KeyManagementService.ListImportJobs.
**/
public class ListImportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importJobs")
    public ImportJob[] importJobs;
    public ListImportJobsResponse withImportJobs(ImportJob[] importJobs) {
        this.importJobs = importJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListImportJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListImportJobsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}