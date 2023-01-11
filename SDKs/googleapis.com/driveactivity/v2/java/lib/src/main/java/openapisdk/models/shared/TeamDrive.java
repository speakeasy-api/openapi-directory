package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamDrive
 * This item is deprecated; please see `Drive` instead.
**/
public class TeamDrive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamDrive withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root")
    public DriveItem root;
    public TeamDrive withRoot(DriveItem root) {
        this.root = root;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public TeamDrive withTitle(String title) {
        this.title = title;
        return this;
    }
}