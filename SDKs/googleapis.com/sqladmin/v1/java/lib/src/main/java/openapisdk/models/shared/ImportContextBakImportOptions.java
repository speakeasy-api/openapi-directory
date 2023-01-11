package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportContextBakImportOptions
 * Import parameters specific to SQL Server .BAK files
**/
public class ImportContextBakImportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionOptions")
    public ImportContextBakImportOptionsEncryptionOptions encryptionOptions;
    public ImportContextBakImportOptions withEncryptionOptions(ImportContextBakImportOptionsEncryptionOptions encryptionOptions) {
        this.encryptionOptions = encryptionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("striped")
    public Boolean striped;
    public ImportContextBakImportOptions withStriped(Boolean striped) {
        this.striped = striped;
        return this;
    }
}