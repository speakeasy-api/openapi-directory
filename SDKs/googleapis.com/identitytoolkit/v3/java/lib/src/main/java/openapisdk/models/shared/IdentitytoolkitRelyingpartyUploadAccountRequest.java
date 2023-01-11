package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyUploadAccountRequest
 * Request to upload user account in batch.
**/
public class IdentitytoolkitRelyingpartyUploadAccountRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOverwrite")
    public Boolean allowOverwrite;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withAllowOverwrite(Boolean allowOverwrite) {
        this.allowOverwrite = allowOverwrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockSize")
    public Integer blockSize;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withBlockSize(Integer blockSize) {
        this.blockSize = blockSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuMemCost")
    public Integer cpuMemCost;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withCpuMemCost(Integer cpuMemCost) {
        this.cpuMemCost = cpuMemCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dkLen")
    public Integer dkLen;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withDkLen(Integer dkLen) {
        this.dkLen = dkLen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashAlgorithm")
    public String hashAlgorithm;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withHashAlgorithm(String hashAlgorithm) {
        this.hashAlgorithm = hashAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryCost")
    public Integer memoryCost;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withMemoryCost(Integer memoryCost) {
        this.memoryCost = memoryCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelization")
    public Integer parallelization;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withParallelization(Integer parallelization) {
        this.parallelization = parallelization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rounds")
    public Integer rounds;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withRounds(Integer rounds) {
        this.rounds = rounds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saltSeparator")
    public String saltSeparator;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withSaltSeparator(String saltSeparator) {
        this.saltSeparator = saltSeparator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sanityCheck")
    public Boolean sanityCheck;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withSanityCheck(Boolean sanityCheck) {
        this.sanityCheck = sanityCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signerKey")
    public String signerKey;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withSignerKey(String signerKey) {
        this.signerKey = signerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetProjectId")
    public String targetProjectId;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withTargetProjectId(String targetProjectId) {
        this.targetProjectId = targetProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public UserInfo[] users;
    public IdentitytoolkitRelyingpartyUploadAccountRequest withUsers(UserInfo[] users) {
        this.users = users;
        return this;
    }
}