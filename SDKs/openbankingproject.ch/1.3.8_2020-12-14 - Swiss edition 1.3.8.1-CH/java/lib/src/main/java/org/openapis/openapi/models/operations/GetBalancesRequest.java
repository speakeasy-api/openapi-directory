/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetBalancesRequest {
    /**
     * This then contains the consentId of the related AIS consent, which was performed prior to this payment initiation.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Consent-ID")
    public String consentID;

    public GetBalancesRequest withConsentID(String consentID) {
        this.consentID = consentID;
        return this;
    }
    
    /**
     * Is contained if and only if the "Signature" element is contained in the header of the request.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;

    public GetBalancesRequest withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;

    public GetBalancesRequest withPSUAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;

    public GetBalancesRequest withPSUAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;

    public GetBalancesRequest withPSUAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;

    public GetBalancesRequest withPSUAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    
    /**
     * UUID (Universally Unique Identifier) for a device, which is used by the PSU, if available.
     * UUID identifies either a device or a device dependant application installation.
     * In case of an installation identification this ID needs to be unaltered until removal from device.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Device-ID")
    public String psuDeviceID;

    public GetBalancesRequest withPSUDeviceID(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    
    /**
     * The forwarded Geo Location of the corresponding http request between PSU and TPP if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;

    public GetBalancesRequest withPSUGeoLocation(String psuGeoLocation) {
        this.psuGeoLocation = psuGeoLocation;
        return this;
    }
    
    /**
     * HTTP method used at the PSU ? TPP interface, if available.
     * Valid values are:
     * * GET
     * * POST
     * * PUT
     * * PATCH
     * * DELETE
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Http-Method")
    public org.openapis.openapi.models.shared.PSUHttpMethodEnum psuHttpMethod;

    public GetBalancesRequest withPSUHttpMethod(org.openapis.openapi.models.shared.PSUHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    
    /**
     * The forwarded IP Address header field consists of the corresponding HTTP request
     * IP Address field between PSU and TPP.
     * It shall be contained if and only if this request was actively initiated by the PSU.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;

    public GetBalancesRequest withPSUIPAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    
    /**
     * The forwarded IP Port header field consists of the corresponding HTTP request IP Port field between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;

    public GetBalancesRequest withPSUIPPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    
    /**
     * The forwarded Agent header field of the HTTP request between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;

    public GetBalancesRequest withPSUUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    
    /**
     * A signature of the request by the TPP on application level. This might be mandated by ASPSP.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;

    public GetBalancesRequest withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    
    /**
     * The certificate used for signing the request, in base64 encoding.
     * Must be contained if a signature is contained.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;

    public GetBalancesRequest withTPPSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    
    /**
     * ID of the request, unique to the call, as determined by the initiating party.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;

    public GetBalancesRequest withXRequestID(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
    
    /**
     * This identification is denoting the addressed (card) account. 
     * The account-id is retrieved by using a "Read Account List" or "Read Card Account list" call. 
     * The account-id is the "resourceId" attribute of the account structure. 
     * Its value is constant at least throughout the lifecycle of a given consent.
     * 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-id")
    public String accountId;

    public GetBalancesRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    
    public GetBalancesRequest(@JsonProperty("Consent-ID") String consentID, @JsonProperty("X-Request-ID") String xRequestID, @JsonProperty("account-id") String accountId) {
        this.consentID = consentID;
        this.xRequestID = xRequestID;
        this.accountId = accountId;
  }
}
