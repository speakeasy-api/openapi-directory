package openapisdk.models.operations;



public class UsZipRaceEthnicityBatchResponse {
    public openapisdk.models.shared.BatchFirstLastNameUsRaceEthnicityOut batchFirstLastNameUSRaceEthnicityOut;
    public UsZipRaceEthnicityBatchResponse withBatchFirstLastNameUsRaceEthnicityOut(openapisdk.models.shared.BatchFirstLastNameUsRaceEthnicityOut batchFirstLastNameUSRaceEthnicityOut) {
        this.batchFirstLastNameUSRaceEthnicityOut = batchFirstLastNameUSRaceEthnicityOut;
        return this;
    }
    public String contentType;
    public UsZipRaceEthnicityBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsZipRaceEthnicityBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}