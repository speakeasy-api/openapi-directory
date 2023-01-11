package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportContextBakImportOptionsEncryptionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certPath")
    public String certPath;
    public ImportContextBakImportOptionsEncryptionOptions withCertPath(String certPath) {
        this.certPath = certPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvkPassword")
    public String pvkPassword;
    public ImportContextBakImportOptionsEncryptionOptions withPvkPassword(String pvkPassword) {
        this.pvkPassword = pvkPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pvkPath")
    public String pvkPath;
    public ImportContextBakImportOptionsEncryptionOptions withPvkPath(String pvkPath) {
        this.pvkPath = pvkPath;
        return this;
    }
}