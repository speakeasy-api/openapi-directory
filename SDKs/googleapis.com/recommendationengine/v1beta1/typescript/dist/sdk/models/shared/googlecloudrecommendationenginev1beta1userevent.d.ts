import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1EventDetail } from "./googlecloudrecommendationenginev1beta1eventdetail";
import { GoogleCloudRecommendationengineV1beta1ProductEventDetail } from "./googlecloudrecommendationenginev1beta1producteventdetail";
import { GoogleCloudRecommendationengineV1beta1UserInfo } from "./googlecloudrecommendationenginev1beta1userinfo";
/**
 * Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.
 */
export declare enum GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum {
    EventSourceUnspecified = "EVENT_SOURCE_UNSPECIFIED",
    Automl = "AUTOML",
    Ecommerce = "ECOMMERCE",
    BatchUpload = "BATCH_UPLOAD"
}
/**
 * UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
 */
export declare class GoogleCloudRecommendationengineV1beta1UserEvent extends SpeakeasyBase {
    /**
     * User event details shared by all recommendation types.
     */
    eventDetail?: GoogleCloudRecommendationengineV1beta1EventDetail;
    /**
     * Optional. This field should *not* be set when using JavaScript pixel or the Recommendations AI Tag. Defaults to `EVENT_SOURCE_UNSPECIFIED`.
     */
    eventSource?: GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
    /**
     * Optional. Only required for ImportUserEvents method. Timestamp of user event created.
     */
    eventTime?: string;
    /**
     * Required. User event type. Allowed values are: * `add-to-cart` Products being added to cart. * `add-to-list` Items being added to a list (shopping list, favorites etc). * `category-page-view` Special pages such as sale or promotion pages viewed. * `checkout-start` User starting a checkout process. * `detail-page-view` Products detail page viewed. * `home-page-view` Homepage viewed. * `page-visit` Generic page visits not included in the event types above. * `purchase-complete` User finishing a purchase. * `refund` Purchased items being refunded or returned. * `remove-from-cart` Products being removed from cart. * `remove-from-list` Items being removed from a list. * `search` Product search. * `shopping-cart-page-view` User viewing a shopping cart. * `impression` List of items displayed. Used by Google Tag Manager.
     */
    eventType?: string;
    /**
     * ProductEventDetail captures user event information specific to retail products.
     */
    productEventDetail?: GoogleCloudRecommendationengineV1beta1ProductEventDetail;
    /**
     * Information of end users.
     */
    userInfo?: GoogleCloudRecommendationengineV1beta1UserInfo;
}
