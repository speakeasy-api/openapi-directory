package openapisdk.models.operations;



public class GetListeNoireResponse {
    public String contentType;
    public GetListeNoireResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Erreur erreur;
    public GetListeNoireResponse withErreur(openapisdk.models.shared.Erreur erreur) {
        this.erreur = erreur;
        return this;
    }
    public Long statusCode;
    public GetListeNoireResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getListeNoire200ApplicationJSONBinaryString;
    public GetListeNoireResponse withGetListeNoire200ApplicationJsonBinaryString(byte[] getListeNoire200ApplicationJSONBinaryString) {
        this.getListeNoire200ApplicationJSONBinaryString = getListeNoire200ApplicationJSONBinaryString;
        return this;
    }
}