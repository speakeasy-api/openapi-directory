package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceExportOptions
 * The options for Voice exports.
**/
public class VoiceExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormat")
    public VoiceExportOptionsExportFormatEnum exportFormat;
    public VoiceExportOptions withExportFormat(VoiceExportOptionsExportFormatEnum exportFormat) {
        this.exportFormat = exportFormat;
        return this;
    }
}