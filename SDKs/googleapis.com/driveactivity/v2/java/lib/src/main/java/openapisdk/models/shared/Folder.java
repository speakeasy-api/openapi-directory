package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Folder
 * This item is deprecated; please see `DriveFolder` instead.
**/
public class Folder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FolderTypeEnum type;
    public Folder withType(FolderTypeEnum type) {
        this.type = type;
        return this;
    }
}