package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeCaptionsInsertRequests {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] applicationOctetStream;
    public YoutubeCaptionsInsertRequests withApplicationOctetStream(byte[] applicationOctetStream) {
        this.applicationOctetStream = applicationOctetStream;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public YoutubeCaptionsInsertRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}