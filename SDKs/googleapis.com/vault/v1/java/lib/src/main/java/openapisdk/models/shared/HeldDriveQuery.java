package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeldDriveQuery
 * Options for Drive holds.
**/
public class HeldDriveQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeSharedDriveFiles")
    public Boolean includeSharedDriveFiles;
    public HeldDriveQuery withIncludeSharedDriveFiles(Boolean includeSharedDriveFiles) {
        this.includeSharedDriveFiles = includeSharedDriveFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeTeamDriveFiles")
    public Boolean includeTeamDriveFiles;
    public HeldDriveQuery withIncludeTeamDriveFiles(Boolean includeTeamDriveFiles) {
        this.includeTeamDriveFiles = includeTeamDriveFiles;
        return this;
    }
}