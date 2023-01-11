package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportStats
 * Progress information for an export.
**/
public class ExportStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportedArtifactCount")
    public String exportedArtifactCount;
    public ExportStats withExportedArtifactCount(String exportedArtifactCount) {
        this.exportedArtifactCount = exportedArtifactCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeInBytes")
    public String sizeInBytes;
    public ExportStats withSizeInBytes(String sizeInBytes) {
        this.sizeInBytes = sizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalArtifactCount")
    public String totalArtifactCount;
    public ExportStats withTotalArtifactCount(String totalArtifactCount) {
        this.totalArtifactCount = totalArtifactCount;
        return this;
    }
}