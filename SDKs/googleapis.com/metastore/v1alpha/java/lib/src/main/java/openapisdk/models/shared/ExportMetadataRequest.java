package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportMetadataRequest
 * Request message for DataprocMetastore.ExportMetadata.
**/
public class ExportMetadataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseDumpType")
    public ExportMetadataRequestDatabaseDumpTypeEnum databaseDumpType;
    public ExportMetadataRequest withDatabaseDumpType(ExportMetadataRequestDatabaseDumpTypeEnum databaseDumpType) {
        this.databaseDumpType = databaseDumpType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationGcsFolder")
    public String destinationGcsFolder;
    public ExportMetadataRequest withDestinationGcsFolder(String destinationGcsFolder) {
        this.destinationGcsFolder = destinationGcsFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ExportMetadataRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}