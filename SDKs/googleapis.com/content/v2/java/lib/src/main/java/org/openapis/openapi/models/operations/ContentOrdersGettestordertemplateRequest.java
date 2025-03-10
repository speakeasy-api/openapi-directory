/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ContentOrdersGettestordertemplateRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public ContentOrdersGettestordertemplateRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public ContentOrdersGettestordertemplateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public ContentOrdersGettestordertemplateRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public ContentOrdersGettestordertemplateRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * The country of the template to retrieve. Defaults to `US`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;

    public ContentOrdersGettestordertemplateRequest withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public ContentOrdersGettestordertemplateRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public ContentOrdersGettestordertemplateRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * The ID of the account that should manage the order. This cannot be a multi-client account.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;

    public ContentOrdersGettestordertemplateRequest withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public ContentOrdersGettestordertemplateRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public ContentOrdersGettestordertemplateRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public ContentOrdersGettestordertemplateRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * The name of the template to retrieve.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public ContentOrdersGettestordertemplateTemplateNameEnum templateName;

    public ContentOrdersGettestordertemplateRequest withTemplateName(ContentOrdersGettestordertemplateTemplateNameEnum templateName) {
        this.templateName = templateName;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public ContentOrdersGettestordertemplateRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public ContentOrdersGettestordertemplateRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public ContentOrdersGettestordertemplateRequest(@JsonProperty("merchantId") String merchantId, @JsonProperty("templateName") ContentOrdersGettestordertemplateTemplateNameEnum templateName) {
        this.merchantId = merchantId;
        this.templateName = templateName;
  }
}
