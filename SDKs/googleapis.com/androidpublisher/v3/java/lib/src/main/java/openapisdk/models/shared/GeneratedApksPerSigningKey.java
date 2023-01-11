package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedApksPerSigningKey
 * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
**/
public class GeneratedApksPerSigningKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateSha256Hash")
    public String certificateSha256Hash;
    public GeneratedApksPerSigningKey withCertificateSha256Hash(String certificateSha256Hash) {
        this.certificateSha256Hash = certificateSha256Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedAssetPackSlices")
    public GeneratedAssetPackSlice[] generatedAssetPackSlices;
    public GeneratedApksPerSigningKey withGeneratedAssetPackSlices(GeneratedAssetPackSlice[] generatedAssetPackSlices) {
        this.generatedAssetPackSlices = generatedAssetPackSlices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedSplitApks")
    public GeneratedSplitApk[] generatedSplitApks;
    public GeneratedApksPerSigningKey withGeneratedSplitApks(GeneratedSplitApk[] generatedSplitApks) {
        this.generatedSplitApks = generatedSplitApks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedStandaloneApks")
    public GeneratedStandaloneApk[] generatedStandaloneApks;
    public GeneratedApksPerSigningKey withGeneratedStandaloneApks(GeneratedStandaloneApk[] generatedStandaloneApks) {
        this.generatedStandaloneApks = generatedStandaloneApks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedUniversalApk")
    public GeneratedUniversalApk generatedUniversalApk;
    public GeneratedApksPerSigningKey withGeneratedUniversalApk(GeneratedUniversalApk generatedUniversalApk) {
        this.generatedUniversalApk = generatedUniversalApk;
        return this;
    }
}