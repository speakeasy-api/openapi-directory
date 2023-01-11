package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1UserInfo
 * Information of end users.
**/
public class GoogleCloudRecommendationengineV1beta1UserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directUserRequest")
    public Boolean directUserRequest;
    public GoogleCloudRecommendationengineV1beta1UserInfo withDirectUserRequest(Boolean directUserRequest) {
        this.directUserRequest = directUserRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public GoogleCloudRecommendationengineV1beta1UserInfo withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userAgent")
    public String userAgent;
    public GoogleCloudRecommendationengineV1beta1UserInfo withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GoogleCloudRecommendationengineV1beta1UserInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public GoogleCloudRecommendationengineV1beta1UserInfo withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}