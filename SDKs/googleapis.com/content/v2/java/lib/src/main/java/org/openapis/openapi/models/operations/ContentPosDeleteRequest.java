/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ContentPosDeleteRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public ContentPosDeleteRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public ContentPosDeleteRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public ContentPosDeleteRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public ContentPosDeleteRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dryRun")
    public Boolean dryRun;

    public ContentPosDeleteRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ContentPosDeleteRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public ContentPosDeleteRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * The ID of the POS or inventory data provider.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;

    public ContentPosDeleteRequest withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public ContentPosDeleteRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public ContentPosDeleteRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public ContentPosDeleteRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * A store code that is unique per merchant.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeCode")
    public String storeCode;

    public ContentPosDeleteRequest withStoreCode(String storeCode) {
        this.storeCode = storeCode;
        return this;
    }
    
    /**
     * The ID of the target merchant.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetMerchantId")
    public String targetMerchantId;

    public ContentPosDeleteRequest withTargetMerchantId(String targetMerchantId) {
        this.targetMerchantId = targetMerchantId;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public ContentPosDeleteRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public ContentPosDeleteRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public ContentPosDeleteRequest(@JsonProperty("merchantId") String merchantId, @JsonProperty("storeCode") String storeCode, @JsonProperty("targetMerchantId") String targetMerchantId) {
        this.merchantId = merchantId;
        this.storeCode = storeCode;
        this.targetMerchantId = targetMerchantId;
  }
}
