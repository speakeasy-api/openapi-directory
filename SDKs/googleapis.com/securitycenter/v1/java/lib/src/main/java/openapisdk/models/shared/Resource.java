package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * Information related to the Google Cloud resource that is associated with this finding.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Resource withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folders")
    public Folder[] folders;
    public Resource withFolders(Folder[] folders) {
        this.folders = folders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Resource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentDisplayName")
    public String parentDisplayName;
    public Resource withParentDisplayName(String parentDisplayName) {
        this.parentDisplayName = parentDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentName")
    public String parentName;
    public Resource withParentName(String parentName) {
        this.parentName = parentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectDisplayName")
    public String projectDisplayName;
    public Resource withProjectDisplayName(String projectDisplayName) {
        this.projectDisplayName = projectDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectName")
    public String projectName;
    public Resource withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Resource withType(String type) {
        this.type = type;
        return this;
    }
}