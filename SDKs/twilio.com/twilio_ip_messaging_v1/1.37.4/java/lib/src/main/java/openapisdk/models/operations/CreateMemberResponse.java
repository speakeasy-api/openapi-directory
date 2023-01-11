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
    public openapisdk.models.shared.IpMessagingV1ServiceChannelMember ipMessagingV1ServiceChannelMember;
    public CreateMemberResponse withIpMessagingV1ServiceChannelMember(openapisdk.models.shared.IpMessagingV1ServiceChannelMember ipMessagingV1ServiceChannelMember) {
        this.ipMessagingV1ServiceChannelMember = ipMessagingV1ServiceChannelMember;
        return this;
    }
}