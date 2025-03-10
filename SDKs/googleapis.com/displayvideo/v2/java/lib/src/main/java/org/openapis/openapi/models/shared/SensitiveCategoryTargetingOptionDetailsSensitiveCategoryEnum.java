/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum - Output only. An enum for the DV360 Sensitive category content classifier.
 */
public enum SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum {
    SENSITIVE_CATEGORY_UNSPECIFIED("SENSITIVE_CATEGORY_UNSPECIFIED"),
    SENSITIVE_CATEGORY_ADULT("SENSITIVE_CATEGORY_ADULT"),
    SENSITIVE_CATEGORY_DEROGATORY("SENSITIVE_CATEGORY_DEROGATORY"),
    SENSITIVE_CATEGORY_DOWNLOADS_SHARING("SENSITIVE_CATEGORY_DOWNLOADS_SHARING"),
    SENSITIVE_CATEGORY_WEAPONS("SENSITIVE_CATEGORY_WEAPONS"),
    SENSITIVE_CATEGORY_GAMBLING("SENSITIVE_CATEGORY_GAMBLING"),
    SENSITIVE_CATEGORY_VIOLENCE("SENSITIVE_CATEGORY_VIOLENCE"),
    SENSITIVE_CATEGORY_SUGGESTIVE("SENSITIVE_CATEGORY_SUGGESTIVE"),
    SENSITIVE_CATEGORY_PROFANITY("SENSITIVE_CATEGORY_PROFANITY"),
    SENSITIVE_CATEGORY_ALCOHOL("SENSITIVE_CATEGORY_ALCOHOL"),
    SENSITIVE_CATEGORY_DRUGS("SENSITIVE_CATEGORY_DRUGS"),
    SENSITIVE_CATEGORY_TOBACCO("SENSITIVE_CATEGORY_TOBACCO"),
    SENSITIVE_CATEGORY_POLITICS("SENSITIVE_CATEGORY_POLITICS"),
    SENSITIVE_CATEGORY_RELIGION("SENSITIVE_CATEGORY_RELIGION"),
    SENSITIVE_CATEGORY_TRAGEDY("SENSITIVE_CATEGORY_TRAGEDY"),
    SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS("SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS"),
    SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES("SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES"),
    SENSITIVE_CATEGORY_SHOCKING("SENSITIVE_CATEGORY_SHOCKING"),
    SENSITIVE_CATEGORY_EMBEDDED_VIDEO("SENSITIVE_CATEGORY_EMBEDDED_VIDEO"),
    SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO("SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO");

    @JsonValue
    public final String value;

    private SensitiveCategoryTargetingOptionDetailsSensitiveCategoryEnum(String value) {
        this.value = value;
    }
}
