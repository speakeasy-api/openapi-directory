package openapisdk.models.shared;



/**
 * DeobfuscationFile
 * Represents a deobfuscation file.
**/
public class DeobfuscationFile {
    public String symbolType;
    public DeobfuscationFile withSymbolType(String symbolType) {
        this.symbolType = symbolType;
        return this;
    }
}