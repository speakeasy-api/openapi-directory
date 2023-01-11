package openapisdk.models.operations;



public class CreateExternalCampaignResponse {
    public String contentType;
    public CreateExternalCampaignResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateExternalCampaignResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MessagingV1ExternalCampaign messagingV1ExternalCampaign;
    public CreateExternalCampaignResponse withMessagingV1ExternalCampaign(openapisdk.models.shared.MessagingV1ExternalCampaign messagingV1ExternalCampaign) {
        this.messagingV1ExternalCampaign = messagingV1ExternalCampaign;
        return this;
    }
}