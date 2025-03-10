/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum - Authorization type for user. Can be 'Guest' or '802.1X' for wireless networks, or 'Client VPN' for wired networks. Defaults to '802.1X'.
 */
public enum CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum {
    EIGHT_HUNDRED_AND_TWO1_X("802.1X"),
    CLIENT_VPN("Client VPN"),
    GUEST("Guest");

    @JsonValue
    public final String value;

    private CreateNetworkMerakiAuthUserRequestBodyAccountTypeEnum(String value) {
        this.value = value;
    }
}
