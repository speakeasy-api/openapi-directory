package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupsExportOptions
 * Options for Groups exports.
**/
public class GroupsExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormat")
    public GroupsExportOptionsExportFormatEnum exportFormat;
    public GroupsExportOptions withExportFormat(GroupsExportOptionsExportFormatEnum exportFormat) {
        this.exportFormat = exportFormat;
        return this;
    }
}