package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportCryptoKeyVersionRequest
 * Request message for KeyManagementService.ImportCryptoKeyVersion.
**/
public class ImportCryptoKeyVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public ImportCryptoKeyVersionRequestAlgorithmEnum algorithm;
    public ImportCryptoKeyVersionRequest withAlgorithm(ImportCryptoKeyVersionRequestAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cryptoKeyVersion")
    public String cryptoKeyVersion;
    public ImportCryptoKeyVersionRequest withCryptoKeyVersion(String cryptoKeyVersion) {
        this.cryptoKeyVersion = cryptoKeyVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importJob")
    public String importJob;
    public ImportCryptoKeyVersionRequest withImportJob(String importJob) {
        this.importJob = importJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rsaAesWrappedKey")
    public String rsaAesWrappedKey;
    public ImportCryptoKeyVersionRequest withRsaAesWrappedKey(String rsaAesWrappedKey) {
        this.rsaAesWrappedKey = rsaAesWrappedKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wrappedKey")
    public String wrappedKey;
    public ImportCryptoKeyVersionRequest withWrappedKey(String wrappedKey) {
        this.wrappedKey = wrappedKey;
        return this;
    }
}