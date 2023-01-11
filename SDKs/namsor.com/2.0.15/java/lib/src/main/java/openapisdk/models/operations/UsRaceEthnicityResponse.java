package openapisdk.models.operations;



public class UsRaceEthnicityResponse {
    public String contentType;
    public UsRaceEthnicityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirstLastNameUsRaceEthnicityOut firstLastNameUSRaceEthnicityOut;
    public UsRaceEthnicityResponse withFirstLastNameUsRaceEthnicityOut(openapisdk.models.shared.FirstLastNameUsRaceEthnicityOut firstLastNameUSRaceEthnicityOut) {
        this.firstLastNameUSRaceEthnicityOut = firstLastNameUSRaceEthnicityOut;
        return this;
    }
    public Long statusCode;
    public UsRaceEthnicityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}