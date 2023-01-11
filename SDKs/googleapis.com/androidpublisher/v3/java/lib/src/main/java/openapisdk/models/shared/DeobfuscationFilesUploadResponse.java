package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeobfuscationFilesUploadResponse
 * Responses for the upload.
**/
public class DeobfuscationFilesUploadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deobfuscationFile")
    public DeobfuscationFile deobfuscationFile;
    public DeobfuscationFilesUploadResponse withDeobfuscationFile(DeobfuscationFile deobfuscationFile) {
        this.deobfuscationFile = deobfuscationFile;
        return this;
    }
}