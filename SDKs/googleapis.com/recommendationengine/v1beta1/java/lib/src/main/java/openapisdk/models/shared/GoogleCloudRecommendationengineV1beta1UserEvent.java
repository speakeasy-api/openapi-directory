package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1UserEvent
 * UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
**/
public class GoogleCloudRecommendationengineV1beta1UserEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventDetail")
    public GoogleCloudRecommendationengineV1beta1EventDetail eventDetail;
    public GoogleCloudRecommendationengineV1beta1UserEvent withEventDetail(GoogleCloudRecommendationengineV1beta1EventDetail eventDetail) {
        this.eventDetail = eventDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventSource")
    public GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum eventSource;
    public GoogleCloudRecommendationengineV1beta1UserEvent withEventSource(GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTime")
    public String eventTime;
    public GoogleCloudRecommendationengineV1beta1UserEvent withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public GoogleCloudRecommendationengineV1beta1UserEvent withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productEventDetail")
    public GoogleCloudRecommendationengineV1beta1ProductEventDetail productEventDetail;
    public GoogleCloudRecommendationengineV1beta1UserEvent withProductEventDetail(GoogleCloudRecommendationengineV1beta1ProductEventDetail productEventDetail) {
        this.productEventDetail = productEventDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public GoogleCloudRecommendationengineV1beta1UserInfo userInfo;
    public GoogleCloudRecommendationengineV1beta1UserEvent withUserInfo(GoogleCloudRecommendationengineV1beta1UserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}