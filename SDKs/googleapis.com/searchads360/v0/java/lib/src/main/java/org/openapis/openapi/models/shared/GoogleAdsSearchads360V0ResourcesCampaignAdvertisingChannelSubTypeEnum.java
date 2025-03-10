/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelSubTypeEnum - Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed.
 */
public enum GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelSubTypeEnum {
    UNSPECIFIED("UNSPECIFIED"),
    UNKNOWN("UNKNOWN"),
    SEARCH_MOBILE_APP("SEARCH_MOBILE_APP"),
    DISPLAY_MOBILE_APP("DISPLAY_MOBILE_APP"),
    SEARCH_EXPRESS("SEARCH_EXPRESS"),
    DISPLAY_EXPRESS("DISPLAY_EXPRESS"),
    SHOPPING_SMART_ADS("SHOPPING_SMART_ADS"),
    DISPLAY_GMAIL_AD("DISPLAY_GMAIL_AD"),
    DISPLAY_SMART_CAMPAIGN("DISPLAY_SMART_CAMPAIGN"),
    VIDEO_OUTSTREAM("VIDEO_OUTSTREAM"),
    VIDEO_ACTION("VIDEO_ACTION"),
    VIDEO_NON_SKIPPABLE("VIDEO_NON_SKIPPABLE"),
    APP_CAMPAIGN("APP_CAMPAIGN"),
    APP_CAMPAIGN_FOR_ENGAGEMENT("APP_CAMPAIGN_FOR_ENGAGEMENT"),
    LOCAL_CAMPAIGN("LOCAL_CAMPAIGN"),
    SHOPPING_COMPARISON_LISTING_ADS("SHOPPING_COMPARISON_LISTING_ADS"),
    SMART_CAMPAIGN("SMART_CAMPAIGN"),
    VIDEO_SEQUENCE("VIDEO_SEQUENCE"),
    APP_CAMPAIGN_FOR_PRE_REGISTRATION("APP_CAMPAIGN_FOR_PRE_REGISTRATION"),
    VIDEO_REACH_TARGET_FREQUENCY("VIDEO_REACH_TARGET_FREQUENCY"),
    TRAVEL_ACTIVITIES("TRAVEL_ACTIVITIES");

    @JsonValue
    public final String value;

    private GoogleAdsSearchads360V0ResourcesCampaignAdvertisingChannelSubTypeEnum(String value) {
        this.value = value;
    }
}
