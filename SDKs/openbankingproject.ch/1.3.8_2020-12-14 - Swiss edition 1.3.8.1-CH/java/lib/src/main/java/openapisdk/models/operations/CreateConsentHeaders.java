package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConsentHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;
    public CreateConsentHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;
    public CreateConsentHeaders withPsuAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;
    public CreateConsentHeaders withPsuAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;
    public CreateConsentHeaders withPsuAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;
    public CreateConsentHeaders withPsuAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID")
    public String psuCorporateID;
    public CreateConsentHeaders withPsuCorporateId(String psuCorporateID) {
        this.psuCorporateID = psuCorporateID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID-Type")
    public String psuCorporateIDType;
    public CreateConsentHeaders withPsuCorporateIdType(String psuCorporateIDType) {
        this.psuCorporateIDType = psuCorporateIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Device-ID")
    public String psuDeviceID;
    public CreateConsentHeaders withPsuDeviceId(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;
    public CreateConsentHeaders withPsuGeoLocation(String psuGeoLocation) {
        this.psuGeoLocation = psuGeoLocation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Http-Method")
    public openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod;
    public CreateConsentHeaders withPsuHttpMethod(openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID")
    public String psuID;
    public CreateConsentHeaders withPsuId(String psuID) {
        this.psuID = psuID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID-Type")
    public String psuIDType;
    public CreateConsentHeaders withPsuIdType(String psuIDType) {
        this.psuIDType = psuIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;
    public CreateConsentHeaders withPsuIpAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;
    public CreateConsentHeaders withPsuIpPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;
    public CreateConsentHeaders withPsuUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;
    public CreateConsentHeaders withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Brand-Logging-Information")
    public String tppBrandLoggingInformation;
    public CreateConsentHeaders withTppBrandLoggingInformation(String tppBrandLoggingInformation) {
        this.tppBrandLoggingInformation = tppBrandLoggingInformation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Explicit-Authorisation-Preferred")
    public Boolean tppExplicitAuthorisationPreferred;
    public CreateConsentHeaders withTppExplicitAuthorisationPreferred(Boolean tppExplicitAuthorisationPreferred) {
        this.tppExplicitAuthorisationPreferred = tppExplicitAuthorisationPreferred;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Nok-Redirect-URI")
    public String tppNokRedirectURI;
    public CreateConsentHeaders withTppNokRedirectUri(String tppNokRedirectURI) {
        this.tppNokRedirectURI = tppNokRedirectURI;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Notification-Content-Preferred")
    public String tppNotificationContentPreferred;
    public CreateConsentHeaders withTppNotificationContentPreferred(String tppNotificationContentPreferred) {
        this.tppNotificationContentPreferred = tppNotificationContentPreferred;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Notification-URI")
    public String tppNotificationURI;
    public CreateConsentHeaders withTppNotificationUri(String tppNotificationURI) {
        this.tppNotificationURI = tppNotificationURI;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Redirect-Preferred")
    public Boolean tppRedirectPreferred;
    public CreateConsentHeaders withTppRedirectPreferred(Boolean tppRedirectPreferred) {
        this.tppRedirectPreferred = tppRedirectPreferred;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Redirect-URI")
    public String tppRedirectURI;
    public CreateConsentHeaders withTppRedirectUri(String tppRedirectURI) {
        this.tppRedirectURI = tppRedirectURI;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;
    public CreateConsentHeaders withTppSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;
    public CreateConsentHeaders withXRequestId(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
}