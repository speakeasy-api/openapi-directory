/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput - Request message for BatchCreateUserLinks RPC.
 */
public class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput {
    /**
     * Optional. If set, then email the new users notifying them that they've been granted permissions to the resource. Regardless of whether this is set or not, notify_new_user field inside each individual request is ignored.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifyNewUsers")
    public Boolean notifyNewUsers;

    public GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput withNotifyNewUsers(Boolean notifyNewUsers) {
        this.notifyNewUsers = notifyNewUsers;
        return this;
    }
    
    /**
     * Required. The requests specifying the user links to create. A maximum of 1000 user links can be created in a batch.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput[] requests;

    public GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput withRequests(GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput[] requests) {
        this.requests = requests;
        return this;
    }
    
    public GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput(){}
}
