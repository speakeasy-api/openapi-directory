/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SearchAnalyticsQueryRequestSearchTypeEnum - [Optional; Default is \"web\"] The search type to filter for.
 */
public enum SearchAnalyticsQueryRequestSearchTypeEnum {
    WEB("WEB"),
    IMAGE("IMAGE"),
    VIDEO("VIDEO"),
    NEWS("NEWS"),
    DISCOVER("DISCOVER"),
    GOOGLE_NEWS("GOOGLE_NEWS");

    @JsonValue
    public final String value;

    private SearchAnalyticsQueryRequestSearchTypeEnum(String value) {
        this.value = value;
    }
}
