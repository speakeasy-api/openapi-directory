/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UpdateCredentialUpdateCredentialRequest {
    /**
     * [GCM only] The API key for the project that was obtained from the Google Developer console for your GCM Service application credential.
     */
    @SpeakeasyMetadata("form:name=ApiKey")
    public String apiKey;
    public UpdateCredentialUpdateCredentialRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    /**
     * [APN only] The URL encoded representation of the certificate. For example, 
     * `-----BEGIN CERTIFICATE-----
     * MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEF.....A==
     * -----END CERTIFICATE-----`.
     */
    @SpeakeasyMetadata("form:name=Certificate")
    public String certificate;
    public UpdateCredentialUpdateCredentialRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
     */
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateCredentialUpdateCredentialRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    
    /**
     * [APN only] The URL encoded representation of the private key. For example,
     * `-----BEGIN RSA PRIVATE KEY-----
     * MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fG...
     * -----END RSA PRIVATE KEY-----`.
     */
    @SpeakeasyMetadata("form:name=PrivateKey")
    public String privateKey;
    public UpdateCredentialUpdateCredentialRequest withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox APNs or `false` to send to production.
     */
    @SpeakeasyMetadata("form:name=Sandbox")
    public Boolean sandbox;
    public UpdateCredentialUpdateCredentialRequest withSandbox(Boolean sandbox) {
        this.sandbox = sandbox;
        return this;
    }
    
    /**
     * [FCM only] The **Server key** of your project from the Firebase console, found under Settings / Cloud messaging.
     */
    @SpeakeasyMetadata("form:name=Secret")
    public String secret;
    public UpdateCredentialUpdateCredentialRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    
    @SpeakeasyMetadata("form:name=Type")
    public org.openapis.openapi.models.shared.CredentialEnumPushTypeEnum type;
    public UpdateCredentialUpdateCredentialRequest withType(org.openapis.openapi.models.shared.CredentialEnumPushTypeEnum type) {
        this.type = type;
        return this;
    }
    
}
