package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveItemReference
 * A lightweight reference to a Drive item, such as a file or folder.
**/
public class DriveItemReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFile")
    public java.util.Map<String, Object> driveFile;
    public DriveItemReference withDriveFile(java.util.Map<String, Object> driveFile) {
        this.driveFile = driveFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveFolder")
    public DriveFolder driveFolder;
    public DriveItemReference withDriveFolder(DriveFolder driveFolder) {
        this.driveFolder = driveFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public java.util.Map<String, Object> file;
    public DriveItemReference withFile(java.util.Map<String, Object> file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder")
    public Folder folder;
    public DriveItemReference withFolder(Folder folder) {
        this.folder = folder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DriveItemReference withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public DriveItemReference withTitle(String title) {
        this.title = title;
        return this;
    }
}