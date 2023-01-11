package openapisdk.models.operations;



public class CreateMemberResponse {
    public String contentType;
    public CreateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMember ipMessagingV2ServiceChannelMember;
    public CreateMemberResponse withIpMessagingV2ServiceChannelMember(openapisdk.models.shared.IpMessagingV2ServiceChannelMember ipMessagingV2ServiceChannelMember) {
        this.ipMessagingV2ServiceChannelMember = ipMessagingV2ServiceChannelMember;
        return this;
    }
}