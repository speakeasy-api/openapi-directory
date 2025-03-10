/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AsymmetricDecryptResponse - Response message for KeyManagementService.AsymmetricDecrypt.
 */
public class AsymmetricDecryptResponse {
    /**
     * The decrypted data originally encrypted with the matching public key.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintext")
    public String plaintext;

    public AsymmetricDecryptResponse withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
    
    /**
     * Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext. An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plaintextCrc32c")
    public String plaintextCrc32c;

    public AsymmetricDecryptResponse withPlaintextCrc32c(String plaintextCrc32c) {
        this.plaintextCrc32c = plaintextCrc32c;
        return this;
    }
    
    /**
     * The ProtectionLevel of the CryptoKeyVersion used in decryption.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectionLevel")
    public AsymmetricDecryptResponseProtectionLevelEnum protectionLevel;

    public AsymmetricDecryptResponse withProtectionLevel(AsymmetricDecryptResponseProtectionLevelEnum protectionLevel) {
        this.protectionLevel = protectionLevel;
        return this;
    }
    
    /**
     * Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifiedCiphertextCrc32c")
    public Boolean verifiedCiphertextCrc32c;

    public AsymmetricDecryptResponse withVerifiedCiphertextCrc32c(Boolean verifiedCiphertextCrc32c) {
        this.verifiedCiphertextCrc32c = verifiedCiphertextCrc32c;
        return this;
    }
    
    public AsymmetricDecryptResponse(){}
}
