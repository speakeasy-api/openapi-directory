package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeChannelBannersInsertRequests {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] applicationOctetStream;
    public YoutubeChannelBannersInsertRequests withApplicationOctetStream(byte[] applicationOctetStream) {
        this.applicationOctetStream = applicationOctetStream;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/jpeg")
    public byte[] imageJpeg;
    public YoutubeChannelBannersInsertRequests withImageJpeg(byte[] imageJpeg) {
        this.imageJpeg = imageJpeg;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/png")
    public byte[] imagePng;
    public YoutubeChannelBannersInsertRequests withImagePng(byte[] imagePng) {
        this.imagePng = imagePng;
        return this;
    }
}