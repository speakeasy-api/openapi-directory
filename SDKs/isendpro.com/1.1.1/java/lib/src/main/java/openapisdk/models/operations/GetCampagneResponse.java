package openapisdk.models.operations;



public class GetCampagneResponse {
    public byte[] body;
    public GetCampagneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCampagneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public GetCampagneResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public Long statusCode;
    public GetCampagneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getCampagne200ApplicationJSONBinaryString;
    public GetCampagneResponse withGetCampagne200ApplicationJsonBinaryString(byte[] getCampagne200ApplicationJSONBinaryString) {
        this.getCampagne200ApplicationJSONBinaryString = getCampagne200ApplicationJSONBinaryString;
        return this;
    }
    public byte[] getCampagne200FileBinaryString;
    public GetCampagneResponse withGetCampagne200FileBinaryString(byte[] getCampagne200FileBinaryString) {
        this.getCampagne200FileBinaryString = getCampagne200FileBinaryString;
        return this;
    }
}