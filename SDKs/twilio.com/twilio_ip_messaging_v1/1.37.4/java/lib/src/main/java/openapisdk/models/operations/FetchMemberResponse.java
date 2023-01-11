package openapisdk.models.operations;



public class FetchMemberResponse {
    public String contentType;
    public FetchMemberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMemberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.IpMessagingV1ServiceChannelMember ipMessagingV1ServiceChannelMember;
    public FetchMemberResponse withIpMessagingV1ServiceChannelMember(openapisdk.models.shared.IpMessagingV1ServiceChannelMember ipMessagingV1ServiceChannelMember) {
        this.ipMessagingV1ServiceChannelMember = ipMessagingV1ServiceChannelMember;
        return this;
    }
}