package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileLocation
 * Indicates the location at which a package was found.
**/
public class FileLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePath")
    public String filePath;
    public FileLocation withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
}