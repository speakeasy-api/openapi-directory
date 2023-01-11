package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentInitiationScaStatusHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;
    public GetPaymentInitiationScaStatusHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept")
    public String psuAccept;
    public GetPaymentInitiationScaStatusHeaders withPsuAccept(String psuAccept) {
        this.psuAccept = psuAccept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Charset")
    public String psuAcceptCharset;
    public GetPaymentInitiationScaStatusHeaders withPsuAcceptCharset(String psuAcceptCharset) {
        this.psuAcceptCharset = psuAcceptCharset;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Encoding")
    public String psuAcceptEncoding;
    public GetPaymentInitiationScaStatusHeaders withPsuAcceptEncoding(String psuAcceptEncoding) {
        this.psuAcceptEncoding = psuAcceptEncoding;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Accept-Language")
    public String psuAcceptLanguage;
    public GetPaymentInitiationScaStatusHeaders withPsuAcceptLanguage(String psuAcceptLanguage) {
        this.psuAcceptLanguage = psuAcceptLanguage;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Device-ID")
    public String psuDeviceID;
    public GetPaymentInitiationScaStatusHeaders withPsuDeviceId(String psuDeviceID) {
        this.psuDeviceID = psuDeviceID;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Geo-Location")
    public String psuGeoLocation;
    public GetPaymentInitiationScaStatusHeaders withPsuGeoLocation(String psuGeoLocation) {
        this.psuGeoLocation = psuGeoLocation;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-Http-Method")
    public openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod;
    public GetPaymentInitiationScaStatusHeaders withPsuHttpMethod(openapisdk.models.shared.PsuHttpMethodEnum psuHttpMethod) {
        this.psuHttpMethod = psuHttpMethod;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Address")
    public String psuIPAddress;
    public GetPaymentInitiationScaStatusHeaders withPsuIpAddress(String psuIPAddress) {
        this.psuIPAddress = psuIPAddress;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-IP-Port")
    public String psuIPPort;
    public GetPaymentInitiationScaStatusHeaders withPsuIpPort(String psuIPPort) {
        this.psuIPPort = psuIPPort;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=PSU-User-Agent")
    public String psuUserAgent;
    public GetPaymentInitiationScaStatusHeaders withPsuUserAgent(String psuUserAgent) {
        this.psuUserAgent = psuUserAgent;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;
    public GetPaymentInitiationScaStatusHeaders withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;
    public GetPaymentInitiationScaStatusHeaders withTppSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;
    public GetPaymentInitiationScaStatusHeaders withXRequestId(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
}