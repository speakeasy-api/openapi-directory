package openapisdk.models.operations;



public class AquifersNamesListResponse {
    public openapisdk.models.shared.AquiferSerializerBasic[] aquiferSerializerBasics;
    public AquifersNamesListResponse withAquiferSerializerBasics(openapisdk.models.shared.AquiferSerializerBasic[] aquiferSerializerBasics) {
        this.aquiferSerializerBasics = aquiferSerializerBasics;
        return this;
    }
    public String contentType;
    public AquifersNamesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AquifersNamesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}