/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateSigningBasketRequest {
    /**
     * This data element may be contained, if the payment initiation transaction is part of a session, i.e. combined AIS/PIS service.
     * This then contains the consentId of the related AIS consent, which was performed prior to this payment initiation.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Consent-ID")
    public String consentID;

    public CreateSigningBasketRequest withConsentID(String consentID) {
        this.consentID = consentID;
        return this;
    }
    
    /**
     * Is contained if and only if the "Signature" element is contained in the header of the request.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;

    public CreateSigningBasketRequest withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;

    public CreateSigningBasketRequest withPSUAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;

    public CreateSigningBasketRequest withPSUAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;

    public CreateSigningBasketRequest withPSUAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;

    public CreateSigningBasketRequest withPSUAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    
    /**
     * Might be mandated in the ASPSP's documentation. Only used in a corporate context.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID")
    public String psuCorporateID;

    public CreateSigningBasketRequest withPSUCorporateID(String psuCorporateID) {
        this.psuCorporateID = psuCorporateID;
        return this;
    }
    
    /**
     * Might be mandated in the ASPSP's documentation. Only used in a corporate context.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID-Type")
    public String psuCorporateIDType;

    public CreateSigningBasketRequest withPSUCorporateIDType(String psuCorporateIDType) {
        this.psuCorporateIDType = psuCorporateIDType;
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

    public CreateSigningBasketRequest withPSUDeviceID(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    
    /**
     * The forwarded Geo Location of the corresponding http request between PSU and TPP if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;

    public CreateSigningBasketRequest withPSUGeoLocation(String psuGeoLocation) {
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

    public CreateSigningBasketRequest withPSUHttpMethod(org.openapis.openapi.models.shared.PSUHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    
    /**
     * Client ID of the PSU in the ASPSP client interface.
     * 
     * Might be mandated in the ASPSP's documentation.
     * 
     * It might be contained even if an OAuth2 based authentication was performed in a pre-step or an OAuth2 based SCA was performed in an preceding
     * AIS service in the same session.
     * In this case the ASPSP might check whether PSU-ID and token match,
     * according to ASPSP documentation.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID")
    public String psuId;

    public CreateSigningBasketRequest withPsuId(String psuId) {
        this.psuId = psuId;
        return this;
    }
    
    /**
     * Type of the PSU-ID, needed in scenarios where PSUs have several PSU-IDs as access possibility.
     * 
     * In this case, the mean and use are then defined in the ASPSP's documentation.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID-Type")
    public String psuIDType;

    public CreateSigningBasketRequest withPSUIDType(String psuIDType) {
        this.psuIDType = psuIDType;
        return this;
    }
    
    /**
     * The forwarded IP Address header field consists of the corresponding http request IP Address field between PSU and TPP.
     * If not available, the TPP shall use the IP Address used by the TPP when submitting this request.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;

    public CreateSigningBasketRequest withPSUIPAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    
    /**
     * The forwarded IP Port header field consists of the corresponding HTTP request IP Port field between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;

    public CreateSigningBasketRequest withPSUIPPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    
    /**
     * The forwarded Agent header field of the HTTP request between PSU and TPP, if available.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;

    public CreateSigningBasketRequest withPSUUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    
    /**
     * A signature of the request by the TPP on application level. This might be mandated by ASPSP.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;

    public CreateSigningBasketRequest withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    
    /**
     * If it equals "true", the TPP prefers to start the authorisation process separately,
     * e.g. because of the usage of a signing basket.
     * This preference might be ignored by the ASPSP, if a signing basket is not supported as functionality.
     * 
     * If it equals "false" or if the parameter is not used, there is no preference of the TPP.
     * This especially indicates that the TPP assumes a direct authorisation of the transaction in the next step,
     * without using a signing basket.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Explicit-Authorisation-Preferred")
    public Boolean tppExplicitAuthorisationPreferred;

    public CreateSigningBasketRequest withTPPExplicitAuthorisationPreferred(Boolean tppExplicitAuthorisationPreferred) {
        this.tppExplicitAuthorisationPreferred = tppExplicitAuthorisationPreferred;
        return this;
    }
    
    /**
     * If this URI is contained, the TPP is asking to redirect the transaction flow to this address instead of the TPP-Redirect-URI in case
     * of a negative result of the redirect SCA method. This might be ignored by the ASPSP.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Nok-Redirect-URI")
    public String tppNokRedirectURI;

    public CreateSigningBasketRequest withTPPNokRedirectURI(String tppNokRedirectURI) {
        this.tppNokRedirectURI = tppNokRedirectURI;
        return this;
    }
    
    /**
     * The string has the form
     * 
     * status=X1, ..., Xn
     * 
     * where Xi is one of the constants SCA, PROCESS, LAST and where constants are not
     * repeated.
     * The usage of the constants supports the of following semantics:
     * 
     *   SCA: A notification on every change of the scaStatus attribute for all related authorisation processes is preferred by the TPP.
     * 
     *   PROCESS: A notification on all changes of consentStatus or transactionStatus attributes is preferred by the TPP.
     *   LAST: Only a notification on the last consentStatus or transactionStatus as available in the XS2A interface is preferred by the TPP.
     * 
     * This header field may be ignored, if the ASPSP does not support resource notification services for the related TPP.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Notification-Content-Preferred")
    public String tppNotificationContentPreferred;

    public CreateSigningBasketRequest withTPPNotificationContentPreferred(String tppNotificationContentPreferred) {
        this.tppNotificationContentPreferred = tppNotificationContentPreferred;
        return this;
    }
    
    /**
     * URI for the Endpoint of the TPP-API to which the status of the payment initiation should be sent.
     * This header field may by ignored by the ASPSP.
     * 
     * For security reasons, it shall be ensured that the TPP-Notification-URI as introduced above is secured by the TPP eIDAS QWAC used for identification of the TPP. The following applies:
     * 
     * URIs which are provided by TPPs in TPP-Notification-URI shall comply with the domain secured by the eIDAS QWAC certificate of the TPP in the field CN or SubjectAltName of the certificate. Please note that in case of example-TPP.com as certificate entry TPP- Notification-URI like www.example-TPP.com/xs2a-client/v1/ASPSPidentifcation/mytransaction- id/notifications or notifications.example-TPP.com/xs2a-client/v1/ASPSPidentifcation/mytransaction- id/notifications would be compliant.
     * 
     * Wildcard definitions shall be taken into account for compliance checks by the ASPSP.
     *  ASPSPs may respond with ASPSP-Notification-Support set to false, if the provided URIs do not comply.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Notification-URI")
    public String tppNotificationURI;

    public CreateSigningBasketRequest withTPPNotificationURI(String tppNotificationURI) {
        this.tppNotificationURI = tppNotificationURI;
        return this;
    }
    
    /**
     * If it equals "true", the TPP prefers a redirect over an embedded SCA approach.
     * If it equals "false", the TPP prefers not to be redirected for SCA. The ASPSP will then choose between the Embedded or the Decoupled
     * SCA approach, depending on the choice of the SCA procedure by the TPP/PSU.
     * If the parameter is not used, the ASPSP will choose the SCA approach to be applied depending on the SCA method chosen by the
     * TPP/PSU.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Redirect-Preferred")
    public Boolean tppRedirectPreferred;

    public CreateSigningBasketRequest withTPPRedirectPreferred(Boolean tppRedirectPreferred) {
        this.tppRedirectPreferred = tppRedirectPreferred;
        return this;
    }
    
    /**
     * URI of the TPP, where the transaction flow shall be redirected to after a Redirect.
     * 
     * Mandated for the Redirect SCA Approach, specifically
     * when TPP-Redirect-Preferred equals "true".
     * It is recommended to always use this header field.
     * 
     * **Remark for Future:**
     * This field might be changed to mandatory in the next version of the specification.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Redirect-URI")
    public String tppRedirectURI;

    public CreateSigningBasketRequest withTPPRedirectURI(String tppRedirectURI) {
        this.tppRedirectURI = tppRedirectURI;
        return this;
    }
    
    /**
     * The certificate used for signing the request, in base64 encoding.
     * Must be contained if a signature is contained.
     * 
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;

    public CreateSigningBasketRequest withTPPSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    
    /**
     * ID of the request, unique to the call, as determined by the initiating party.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;

    public CreateSigningBasketRequest withXRequestID(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
    
    /**
     * Request body for a confirmation of an establishing signing basket request.
     * 
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.SigningBasket signingBasket;

    public CreateSigningBasketRequest withSigningBasket(org.openapis.openapi.models.shared.SigningBasket signingBasket) {
        this.signingBasket = signingBasket;
        return this;
    }
    
    public CreateSigningBasketRequest(@JsonProperty("PSU-IP-Address") String psuIPAddress, @JsonProperty("X-Request-ID") String xRequestID) {
        this.psuIPAddress = psuIPAddress;
        this.xRequestID = xRequestID;
  }
}
