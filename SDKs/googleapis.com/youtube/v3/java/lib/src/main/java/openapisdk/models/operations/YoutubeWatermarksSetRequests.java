package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeWatermarksSetRequests {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] applicationOctetStream;
    public YoutubeWatermarksSetRequests withApplicationOctetStream(byte[] applicationOctetStream) {
        this.applicationOctetStream = applicationOctetStream;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/jpeg")
    public byte[] imageJpeg;
    public YoutubeWatermarksSetRequests withImageJpeg(byte[] imageJpeg) {
        this.imageJpeg = imageJpeg;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/png")
    public byte[] imagePng;
    public YoutubeWatermarksSetRequests withImagePng(byte[] imagePng) {
        this.imagePng = imagePng;
        return this;
    }
}