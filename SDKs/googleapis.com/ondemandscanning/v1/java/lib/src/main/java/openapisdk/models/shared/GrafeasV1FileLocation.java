package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrafeasV1FileLocation
 * Indicates the location at which a package was found.
**/
public class GrafeasV1FileLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePath")
    public String filePath;
    public GrafeasV1FileLocation withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
}