package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveOptions
 * Additional options for Drive search
**/
public class DriveOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSideEncryptedOption")
    public DriveOptionsClientSideEncryptedOptionEnum clientSideEncryptedOption;
    public DriveOptions withClientSideEncryptedOption(DriveOptionsClientSideEncryptedOptionEnum clientSideEncryptedOption) {
        this.clientSideEncryptedOption = clientSideEncryptedOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeSharedDrives")
    public Boolean includeSharedDrives;
    public DriveOptions withIncludeSharedDrives(Boolean includeSharedDrives) {
        this.includeSharedDrives = includeSharedDrives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeTeamDrives")
    public Boolean includeTeamDrives;
    public DriveOptions withIncludeTeamDrives(Boolean includeTeamDrives) {
        this.includeTeamDrives = includeTeamDrives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionDate")
    public String versionDate;
    public DriveOptions withVersionDate(String versionDate) {
        this.versionDate = versionDate;
        return this;
    }
}