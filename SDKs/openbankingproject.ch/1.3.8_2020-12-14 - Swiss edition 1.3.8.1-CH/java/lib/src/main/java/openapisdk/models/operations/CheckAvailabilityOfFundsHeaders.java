package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckAvailabilityOfFundsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public CheckAvailabilityOfFundsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Digest")
    public String digest;
    public CheckAvailabilityOfFundsHeaders withDigest(String digest) {
        this.digest = digest;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Signature")
    public String signature;
    public CheckAvailabilityOfFundsHeaders withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=TPP-Signature-Certificate")
    public String tppSignatureCertificate;
    public CheckAvailabilityOfFundsHeaders withTppSignatureCertificate(String tppSignatureCertificate) {
        this.tppSignatureCertificate = tppSignatureCertificate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Request-ID")
    public String xRequestID;
    public CheckAvailabilityOfFundsHeaders withXRequestId(String xRequestID) {
        this.xRequestID = xRequestID;
        return this;
    }
}