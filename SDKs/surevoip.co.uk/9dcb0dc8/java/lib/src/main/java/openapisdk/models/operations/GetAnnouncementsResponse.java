package openapisdk.models.operations;



public class GetAnnouncementsResponse {
    public byte[] body;
    public GetAnnouncementsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAnnouncementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnnouncementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneGetResponses200ContentApplication1jsonSchema oneGetResponses200ContentApplication1jsonSchema;
    public GetAnnouncementsResponse withOneGetResponses200ContentApplication1jsonSchema(openapisdk.models.shared.OneGetResponses200ContentApplication1jsonSchema oneGetResponses200ContentApplication1jsonSchema) {
        this.oneGetResponses200ContentApplication1jsonSchema = oneGetResponses200ContentApplication1jsonSchema;
        return this;
    }
}