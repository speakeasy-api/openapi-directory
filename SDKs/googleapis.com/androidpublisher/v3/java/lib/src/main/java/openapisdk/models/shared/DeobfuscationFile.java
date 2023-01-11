package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeobfuscationFile
 * Represents a deobfuscation file.
**/
public class DeobfuscationFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbolType")
    public DeobfuscationFileSymbolTypeEnum symbolType;
    public DeobfuscationFile withSymbolType(DeobfuscationFileSymbolTypeEnum symbolType) {
        this.symbolType = symbolType;
        return this;
    }
}