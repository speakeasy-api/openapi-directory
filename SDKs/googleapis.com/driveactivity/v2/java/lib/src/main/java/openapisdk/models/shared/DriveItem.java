package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveItem
 * A Drive item, such as a file or folder.
**/
public class DriveItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFile")
    public java.util.Map<String, Object> driveFile;
    public DriveItem withDriveFile(java.util.Map<String, Object> driveFile) {
        this.driveFile = driveFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFolder")
    public DriveFolder driveFolder;
    public DriveItem withDriveFolder(DriveFolder driveFolder) {
        this.driveFolder = driveFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public java.util.Map<String, Object> file;
    public DriveItem withFile(java.util.Map<String, Object> file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder")
    public Folder folder;
    public DriveItem withFolder(Folder folder) {
        this.folder = folder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public DriveItem withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DriveItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public Owner owner;
    public DriveItem withOwner(Owner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public DriveItem withTitle(String title) {
        this.title = title;
        return this;
    }
}