/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DfareportingInventoryItemsListRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public DfareportingInventoryItemsListRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public DfareportingInventoryItemsListRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public DfareportingInventoryItemsListRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public DfareportingInventoryItemsListRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public DfareportingInventoryItemsListRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * Select only inventory items with these IDs.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;

    public DfareportingInventoryItemsListRequest withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    
    /**
     * Select only inventory items that are in plan.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inPlan")
    public Boolean inPlan;

    public DfareportingInventoryItemsListRequest withInPlan(Boolean inPlan) {
        this.inPlan = inPlan;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public DfareportingInventoryItemsListRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * Maximum number of results to return.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;

    public DfareportingInventoryItemsListRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public DfareportingInventoryItemsListRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Select only inventory items that belong to specified orders.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderId")
    public String[] orderId;

    public DfareportingInventoryItemsListRequest withOrderId(String[] orderId) {
        this.orderId = orderId;
        return this;
    }
    
    /**
     * Value of the nextPageToken from the previous result page.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageToken")
    public String pageToken;

    public DfareportingInventoryItemsListRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public DfareportingInventoryItemsListRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * User profile ID associated with this request.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profileId")
    public String profileId;

    public DfareportingInventoryItemsListRequest withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    
    /**
     * Project ID for order documents.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;

    public DfareportingInventoryItemsListRequest withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public DfareportingInventoryItemsListRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Select only inventory items that are associated with these sites.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteId")
    public String[] siteId;

    public DfareportingInventoryItemsListRequest withSiteId(String[] siteId) {
        this.siteId = siteId;
        return this;
    }
    
    /**
     * Field by which to sort the list.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortField")
    public DfareportingInventoryItemsListSortFieldEnum sortField;

    public DfareportingInventoryItemsListRequest withSortField(DfareportingInventoryItemsListSortFieldEnum sortField) {
        this.sortField = sortField;
        return this;
    }
    
    /**
     * Order of sorted results.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public DfareportingInventoryItemsListSortOrderEnum sortOrder;

    public DfareportingInventoryItemsListRequest withSortOrder(DfareportingInventoryItemsListSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    
    /**
     * Select only inventory items with this type.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DfareportingInventoryItemsListTypeEnum type;

    public DfareportingInventoryItemsListRequest withType(DfareportingInventoryItemsListTypeEnum type) {
        this.type = type;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public DfareportingInventoryItemsListRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public DfareportingInventoryItemsListRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public DfareportingInventoryItemsListRequest(@JsonProperty("profileId") String profileId, @JsonProperty("projectId") String projectId) {
        this.profileId = profileId;
        this.projectId = projectId;
  }
}
