package openapisdk.models.operations;



public class GetZipArchiveResponse {
    public String contentType;
    public GetZipArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetZipArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getZipArchive200ApplicationOctetStreamBinaryString;
    public GetZipArchiveResponse withGetZipArchive200ApplicationOctetStreamBinaryString(byte[] getZipArchive200ApplicationOctetStreamBinaryString) {
        this.getZipArchive200ApplicationOctetStreamBinaryString = getZipArchive200ApplicationOctetStreamBinaryString;
        return this;
    }
}