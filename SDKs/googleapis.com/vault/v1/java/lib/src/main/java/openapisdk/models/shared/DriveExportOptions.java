package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DriveExportOptions
 * Options for Drive exports.
**/
public class DriveExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAccessInfo")
    public Boolean includeAccessInfo;
    public DriveExportOptions withIncludeAccessInfo(Boolean includeAccessInfo) {
        this.includeAccessInfo = includeAccessInfo;
        return this;
    }
}