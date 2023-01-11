package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QrCodeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public QrCodeRequestBody request;
    public QrCodeRequest withRequest(QrCodeRequestBody request) {
        this.request = request;
        return this;
    }
}