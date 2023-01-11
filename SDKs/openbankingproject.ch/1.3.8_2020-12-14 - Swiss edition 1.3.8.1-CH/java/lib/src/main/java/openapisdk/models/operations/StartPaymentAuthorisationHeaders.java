package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPaymentAuthorisationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;
    public StartPaymentAuthorisationHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;
    public StartPaymentAuthorisationHeaders withPsuAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;
    public StartPaymentAuthorisationHeaders withPsuAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;
    public StartPaymentAuthorisationHeaders withPsuAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;
    public StartPaymentAuthorisationHeaders withPsuAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID")
    public String psuCorporateID;
    public StartPaymentAuthorisationHeaders withPsuCorporateId(String psuCorporateID) {
        this.psuCorporateID = psuCorporateID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID-Type")
    public String psuCorporateIDType;
    public StartPaymentAuthorisationHeaders withPsuCorporateIdType(String psuCorporateIDType) {
        this.psuCorporateIDType = psuCorporateIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Device-ID")
    public String psuDeviceID;
    public StartPaymentAuthorisationHeaders withPsuDeviceId(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;
    public StartPaymentAuthorisationHeaders withPsuGeoLocation(String psuGeoLocation) {
        this.psuGeoLocation = psuGeoLocation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Http-Method")
    public openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod;
    public StartPaymentAuthorisationHeaders withPsuHttpMethod(openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID")
    public String psuID;
    public StartPaymentAuthorisationHeaders withPsuId(String psuID) {
        this.psuID = psuID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID-Type")
    public String psuIDType;
    public StartPaymentAuthorisationHeaders withPsuIdType(String psuIDType) {
        this.psuIDType = psuIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;
    public StartPaymentAuthorisationHeaders withPsuIpAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;
    public StartPaymentAuthorisationHeaders withPsuIpPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;
    public StartPaymentAuthorisationHeaders withPsuUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;
    public StartPaymentAuthorisationHeaders withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Nok-Redirect-URI")
    public String tppNokRedirectURI;
    public StartPaymentAuthorisationHeaders withTppNokRedirectUri(String tppNokRedirectURI) {
        this.tppNokRedirectURI = tppNokRedirectURI;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Notification-Content-Preferred")
    public String tppNotificationContentPreferred;
    public StartPaymentAuthorisationHeaders withTppNotificationContentPreferred(String tppNotificationContentPreferred) {
        this.tppNotificationContentPreferred = tppNotificationContentPreferred;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Notification-URI")
    public String tppNotificationURI;
    public StartPaymentAuthorisationHeaders withTppNotificationUri(String tppNotificationURI) {
        this.tppNotificationURI = tppNotificationURI;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Redirect-Preferred")
    public Boolean tppRedirectPreferred;
    public StartPaymentAuthorisationHeaders withTppRedirectPreferred(Boolean tppRedirectPreferred) {
        this.tppRedirectPreferred = tppRedirectPreferred;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Redirect-URI")
    public String tppRedirectURI;
    public StartPaymentAuthorisationHeaders withTppRedirectUri(String tppRedirectURI) {
        this.tppRedirectURI = tppRedirectURI;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;
    public StartPaymentAuthorisationHeaders withTppSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;
    public StartPaymentAuthorisationHeaders withXRequestId(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
}