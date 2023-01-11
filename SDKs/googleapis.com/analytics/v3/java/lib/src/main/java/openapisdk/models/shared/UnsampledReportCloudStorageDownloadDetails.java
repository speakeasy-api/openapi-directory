package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnsampledReportCloudStorageDownloadDetails
 * Download details for a file stored in Google Cloud Storage.
**/
public class UnsampledReportCloudStorageDownloadDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketId")
    public String bucketId;
    public UnsampledReportCloudStorageDownloadDetails withBucketId(String bucketId) {
        this.bucketId = bucketId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public String objectId;
    public UnsampledReportCloudStorageDownloadDetails withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
}