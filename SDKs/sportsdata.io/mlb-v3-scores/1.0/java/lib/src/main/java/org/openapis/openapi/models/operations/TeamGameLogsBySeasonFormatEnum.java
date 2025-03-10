/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * TeamGameLogsBySeasonFormatEnum - Desired response format. Valid entries are &lt;code&gt;XML&lt;/code&gt; or &lt;code&gt;JSON&lt;/code&gt;.
 */
public enum TeamGameLogsBySeasonFormatEnum {
    XML("XML"),
    JSON("JSON");

    @JsonValue
    public final String value;

    private TeamGameLogsBySeasonFormatEnum(String value) {
        this.value = value;
    }
}
