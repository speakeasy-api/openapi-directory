/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SignatureInfo - Information about the digital signature of the resource.
 */
public class SignatureInfo {
    /**
     * The resource name of the customer CryptoKeyVersion used for signing.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerKmsKeyVersion")
    public String customerKmsKeyVersion;

    public SignatureInfo withCustomerKmsKeyVersion(String customerKmsKeyVersion) {
        this.customerKmsKeyVersion = customerKmsKeyVersion;
        return this;
    }
    
    /**
     * The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googlePublicKeyPem")
    public String googlePublicKeyPem;

    public SignatureInfo withGooglePublicKeyPem(String googlePublicKeyPem) {
        this.googlePublicKeyPem = googlePublicKeyPem;
        return this;
    }
    
    /**
     * The digital signature.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;

    public SignatureInfo withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    
    public SignatureInfo(){}
}
