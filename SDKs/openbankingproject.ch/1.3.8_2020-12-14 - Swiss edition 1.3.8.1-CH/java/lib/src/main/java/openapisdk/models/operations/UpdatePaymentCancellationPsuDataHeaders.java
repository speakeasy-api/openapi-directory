package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentCancellationPsuDataHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;
    public UpdatePaymentCancellationPsuDataHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;
    public UpdatePaymentCancellationPsuDataHeaders withPsuAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;
    public UpdatePaymentCancellationPsuDataHeaders withPsuAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;
    public UpdatePaymentCancellationPsuDataHeaders withPsuAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;
    public UpdatePaymentCancellationPsuDataHeaders withPsuAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID")
    public String psuCorporateID;
    public UpdatePaymentCancellationPsuDataHeaders withPsuCorporateId(String psuCorporateID) {
        this.psuCorporateID = psuCorporateID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Corporate-ID-Type")
    public String psuCorporateIDType;
    public UpdatePaymentCancellationPsuDataHeaders withPsuCorporateIdType(String psuCorporateIDType) {
        this.psuCorporateIDType = psuCorporateIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Device-ID")
    public String psuDeviceID;
    public UpdatePaymentCancellationPsuDataHeaders withPsuDeviceId(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;
    public UpdatePaymentCancellationPsuDataHeaders withPsuGeoLocation(String psuGeoLocation) {
        this.psuGeoLocation = psuGeoLocation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Http-Method")
    public openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod;
    public UpdatePaymentCancellationPsuDataHeaders withPsuHttpMethod(openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID")
    public String psuID;
    public UpdatePaymentCancellationPsuDataHeaders withPsuId(String psuID) {
        this.psuID = psuID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-ID-Type")
    public String psuIDType;
    public UpdatePaymentCancellationPsuDataHeaders withPsuIdType(String psuIDType) {
        this.psuIDType = psuIDType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;
    public UpdatePaymentCancellationPsuDataHeaders withPsuIpAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;
    public UpdatePaymentCancellationPsuDataHeaders withPsuIpPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;
    public UpdatePaymentCancellationPsuDataHeaders withPsuUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;
    public UpdatePaymentCancellationPsuDataHeaders withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;
    public UpdatePaymentCancellationPsuDataHeaders withTppSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;
    public UpdatePaymentCancellationPsuDataHeaders withXRequestId(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
}