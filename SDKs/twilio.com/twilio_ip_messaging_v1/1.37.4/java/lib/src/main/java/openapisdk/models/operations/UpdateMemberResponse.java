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
    public openapisdk.models.shared.IpMessagingV1ServiceChannelMember ipMessagingV1ServiceChannelMember;
    public UpdateMemberResponse withIpMessagingV1ServiceChannelMember(openapisdk.models.shared.IpMessagingV1ServiceChannelMember ipMessagingV1ServiceChannelMember) {
        this.ipMessagingV1ServiceChannelMember = ipMessagingV1ServiceChannelMember;
        return this;
    }
}