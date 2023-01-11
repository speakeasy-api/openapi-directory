package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectExport
 * Represents information about a project export.
**/
public class ProjectExport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedImportTimeInMS")
    public Integer estimatedImportTimeInMS;
    public ProjectExport withEstimatedImportTimeInMs(Integer estimatedImportTimeInMS) {
        this.estimatedImportTimeInMS = estimatedImportTimeInMS;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageCount")
    public Integer imageCount;
    public ProjectExport withImageCount(Integer imageCount) {
        this.imageCount = imageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iterationCount")
    public Integer iterationCount;
    public ProjectExport withIterationCount(Integer iterationCount) {
        this.iterationCount = iterationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCount")
    public Integer regionCount;
    public ProjectExport withRegionCount(Integer regionCount) {
        this.regionCount = regionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagCount")
    public Integer tagCount;
    public ProjectExport withTagCount(Integer tagCount) {
        this.tagCount = tagCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public ProjectExport withToken(String token) {
        this.token = token;
        return this;
    }
}