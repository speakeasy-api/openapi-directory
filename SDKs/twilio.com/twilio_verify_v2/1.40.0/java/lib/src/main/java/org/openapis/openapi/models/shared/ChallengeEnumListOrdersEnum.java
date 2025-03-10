/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ChallengeEnumListOrdersEnum - The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`.
 */
public enum ChallengeEnumListOrdersEnum {
    ASC("asc"),
    DESC("desc");

    @JsonValue
    public final String value;

    private ChallengeEnumListOrdersEnum(String value) {
        this.value = value;
    }
}
