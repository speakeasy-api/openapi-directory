/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ReposListForAuthenticatedUserTypeEnum - Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
 */
public enum ReposListForAuthenticatedUserTypeEnum {
    ALL("all"),
    OWNER("owner"),
    PUBLIC_("public"),
    PRIVATE_("private"),
    MEMBER("member");

    @JsonValue
    public final String value;

    private ReposListForAuthenticatedUserTypeEnum(String value) {
        this.value = value;
    }
}
