/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum AdsenseAccountsReportsGenerateMetricsEnum {
    METRIC_UNSPECIFIED("METRIC_UNSPECIFIED"),
    PAGE_VIEWS("PAGE_VIEWS"),
    AD_REQUESTS("AD_REQUESTS"),
    MATCHED_AD_REQUESTS("MATCHED_AD_REQUESTS"),
    TOTAL_IMPRESSIONS("TOTAL_IMPRESSIONS"),
    IMPRESSIONS("IMPRESSIONS"),
    INDIVIDUAL_AD_IMPRESSIONS("INDIVIDUAL_AD_IMPRESSIONS"),
    CLICKS("CLICKS"),
    PAGE_VIEWS_SPAM_RATIO("PAGE_VIEWS_SPAM_RATIO"),
    AD_REQUESTS_SPAM_RATIO("AD_REQUESTS_SPAM_RATIO"),
    MATCHED_AD_REQUESTS_SPAM_RATIO("MATCHED_AD_REQUESTS_SPAM_RATIO"),
    IMPRESSIONS_SPAM_RATIO("IMPRESSIONS_SPAM_RATIO"),
    INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO("INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO"),
    CLICKS_SPAM_RATIO("CLICKS_SPAM_RATIO"),
    AD_REQUESTS_COVERAGE("AD_REQUESTS_COVERAGE"),
    PAGE_VIEWS_CTR("PAGE_VIEWS_CTR"),
    AD_REQUESTS_CTR("AD_REQUESTS_CTR"),
    MATCHED_AD_REQUESTS_CTR("MATCHED_AD_REQUESTS_CTR"),
    IMPRESSIONS_CTR("IMPRESSIONS_CTR"),
    INDIVIDUAL_AD_IMPRESSIONS_CTR("INDIVIDUAL_AD_IMPRESSIONS_CTR"),
    ACTIVE_VIEW_MEASURABILITY("ACTIVE_VIEW_MEASURABILITY"),
    ACTIVE_VIEW_VIEWABILITY("ACTIVE_VIEW_VIEWABILITY"),
    ACTIVE_VIEW_TIME("ACTIVE_VIEW_TIME"),
    ESTIMATED_EARNINGS("ESTIMATED_EARNINGS"),
    PAGE_VIEWS_RPM("PAGE_VIEWS_RPM"),
    AD_REQUESTS_RPM("AD_REQUESTS_RPM"),
    MATCHED_AD_REQUESTS_RPM("MATCHED_AD_REQUESTS_RPM"),
    IMPRESSIONS_RPM("IMPRESSIONS_RPM"),
    INDIVIDUAL_AD_IMPRESSIONS_RPM("INDIVIDUAL_AD_IMPRESSIONS_RPM"),
    COST_PER_CLICK("COST_PER_CLICK"),
    ADS_PER_IMPRESSION("ADS_PER_IMPRESSION"),
    TOTAL_EARNINGS("TOTAL_EARNINGS"),
    WEBSEARCH_RESULT_PAGES("WEBSEARCH_RESULT_PAGES");

    @JsonValue
    public final String value;

    private AdsenseAccountsReportsGenerateMetricsEnum(String value) {
        this.value = value;
    }
}
