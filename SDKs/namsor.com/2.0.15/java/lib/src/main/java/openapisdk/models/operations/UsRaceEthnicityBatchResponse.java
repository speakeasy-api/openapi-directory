package openapisdk.models.operations;



public class UsRaceEthnicityBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameUsRaceEthnicityOut batchFirstLastNameUSRaceEthnicityOut;
    public UsRaceEthnicityBatchResponse withBatchFirstLastNameUsRaceEthnicityOut(openapisdk.models.shared.BatchFirstLastNameUsRaceEthnicityOut batchFirstLastNameUSRaceEthnicityOut) {
        this.batchFirstLastNameUSRaceEthnicityOut = batchFirstLastNameUSRaceEthnicityOut;
        return this;
    }
    public String contentType;
    public UsRaceEthnicityBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsRaceEthnicityBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}