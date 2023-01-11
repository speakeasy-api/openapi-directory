package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSigningBasketPsuDataHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;
    public UpdateSigningBasketPsuDataHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;
    public UpdateSigningBasketPsuDataHeaders withPsuAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;
    public UpdateSigningBasketPsuDataHeaders withPsuAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;
    public UpdateSigningBasketPsuDataHeaders withPsuAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;
    public UpdateSigningBasketPsuDataHeaders withPsuAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID")
    public String psuCorporateID;
    public UpdateSigningBasketPsuDataHeaders withPsuCorporateId(String psuCorporateID) {
        this.psuCorporateID = psuCorporateID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID-Type")
    public String psuCorporateIDType;
    public UpdateSigningBasketPsuDataHeaders withPsuCorporateIdType(String psuCorporateIDType) {
        this.psuCorporateIDType = psuCorporateIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Device-ID")
    public String psuDeviceID;
    public UpdateSigningBasketPsuDataHeaders withPsuDeviceId(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;
    public UpdateSigningBasketPsuDataHeaders withPsuGeoLocation(String psuGeoLocation) {
        this.psuGeoLocation = psuGeoLocation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Http-Method")
    public openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod;
    public UpdateSigningBasketPsuDataHeaders withPsuHttpMethod(openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID")
    public String psuID;
    public UpdateSigningBasketPsuDataHeaders withPsuId(String psuID) {
        this.psuID = psuID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID-Type")
    public String psuIDType;
    public UpdateSigningBasketPsuDataHeaders withPsuIdType(String psuIDType) {
        this.psuIDType = psuIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;
    public UpdateSigningBasketPsuDataHeaders withPsuIpAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;
    public UpdateSigningBasketPsuDataHeaders withPsuIpPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;
    public UpdateSigningBasketPsuDataHeaders withPsuUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;
    public UpdateSigningBasketPsuDataHeaders withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;
    public UpdateSigningBasketPsuDataHeaders withTppSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;
    public UpdateSigningBasketPsuDataHeaders withXRequestId(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
}