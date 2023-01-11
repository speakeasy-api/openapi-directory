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
    public openapisdk.models.shared.IpMessagingV2ServiceChannelMember ipMessagingV2ServiceChannelMember;
    public FetchMemberResponse withIpMessagingV2ServiceChannelMember(openapisdk.models.shared.IpMessagingV2ServiceChannelMember ipMessagingV2ServiceChannelMember) {
        this.ipMessagingV2ServiceChannelMember = ipMessagingV2ServiceChannelMember;
        return this;
    }
}