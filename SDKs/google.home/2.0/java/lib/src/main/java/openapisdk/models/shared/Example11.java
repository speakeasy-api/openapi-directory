package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example11 {
    @JsonProperty("app_device_id")
    public String appDeviceId;
    public Example11 withAppDeviceId(String appDeviceId) {
        this.appDeviceId = appDeviceId;
        return this;
    }
    @JsonProperty("certificate")
    public String certificate;
    public Example11 withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonProperty("signed_data")
    public String signedData;
    public Example11 withSignedData(String signedData) {
        this.signedData = signedData;
        return this;
    }
}