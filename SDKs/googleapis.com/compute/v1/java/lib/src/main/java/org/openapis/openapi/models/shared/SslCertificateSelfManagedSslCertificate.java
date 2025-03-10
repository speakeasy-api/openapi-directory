/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SslCertificateSelfManagedSslCertificate - Configuration and status of a self-managed SSL certificate.
 */
public class SslCertificateSelfManagedSslCertificate {
    /**
     * A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate")
    public String certificate;

    public SslCertificateSelfManagedSslCertificate withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    
    /**
     * A write-only private key in PEM format. Only insert requests will include this field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;

    public SslCertificateSelfManagedSslCertificate withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    
    public SslCertificateSelfManagedSslCertificate(){}
}
