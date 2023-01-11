package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileHashes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileHash")
    public Hash[] fileHash;
    public FileHashes withFileHash(Hash[] fileHash) {
        this.fileHash = fileHash;
        return this;
    }
}