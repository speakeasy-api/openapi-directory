package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Folder
 * Message that contains the resource name and display name of a folder resource.
**/
public class Folder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceFolder")
    public String resourceFolder;
    public Folder withResourceFolder(String resourceFolder) {
        this.resourceFolder = resourceFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceFolderDisplayName")
    public String resourceFolderDisplayName;
    public Folder withResourceFolderDisplayName(String resourceFolderDisplayName) {
        this.resourceFolderDisplayName = resourceFolderDisplayName;
        return this;
    }
}