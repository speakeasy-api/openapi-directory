package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataExport
 * The details of a metadata export operation.
**/
public class MetadataExport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseDumpType")
    public MetadataExportDatabaseDumpTypeEnum databaseDumpType;
    public MetadataExport withDatabaseDumpType(MetadataExportDatabaseDumpTypeEnum databaseDumpType) {
        this.databaseDumpType = databaseDumpType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationGcsUri")
    public String destinationGcsUri;
    public MetadataExport withDestinationGcsUri(String destinationGcsUri) {
        this.destinationGcsUri = destinationGcsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public MetadataExport withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public MetadataExport withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public MetadataExportStateEnum state;
    public MetadataExport withState(MetadataExportStateEnum state) {
        this.state = state;
        return this;
    }
}