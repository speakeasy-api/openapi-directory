package openapisdk.models.operations;



public class UpdateMemberResponse {
    public String contentType;
    public UpdateMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMember ipMessagingV2ServiceChannelMember;
    public UpdateMemberResponse withIpMessagingV2ServiceChannelMember(openapisdk.models.shared.IpMessagingV2ServiceChannelMember ipMessagingV2ServiceChannelMember) {
        this.ipMessagingV2ServiceChannelMember = ipMessagingV2ServiceChannelMember;
        return this;
    }
}