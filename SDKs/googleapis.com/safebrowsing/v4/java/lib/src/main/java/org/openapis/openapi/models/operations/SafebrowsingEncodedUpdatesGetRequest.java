/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class SafebrowsingEncodedUpdatesGetRequest {
    /**
     * V1 error format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public org.openapis.openapi.models.shared.XgafvEnum dollarXgafv;

    public SafebrowsingEncodedUpdatesGetRequest withDollarXgafv(org.openapis.openapi.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    
    /**
     * OAuth access token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;

    public SafebrowsingEncodedUpdatesGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * Data format for response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public SafebrowsingEncodedUpdatesGetRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * JSONP
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;

    public SafebrowsingEncodedUpdatesGetRequest withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    
    /**
     * A client ID that uniquely identifies the client implementation of the Safe Browsing API.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientId")
    public String clientId;

    public SafebrowsingEncodedUpdatesGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * The version of the client implementation.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientVersion")
    public String clientVersion;

    public SafebrowsingEncodedUpdatesGetRequest withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    
    /**
     * A serialized FetchThreatListUpdatesRequest proto.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encodedRequest")
    public String encodedRequest;

    public SafebrowsingEncodedUpdatesGetRequest withEncodedRequest(String encodedRequest) {
        this.encodedRequest = encodedRequest;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public SafebrowsingEncodedUpdatesGetRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public SafebrowsingEncodedUpdatesGetRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public SafebrowsingEncodedUpdatesGetRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public SafebrowsingEncodedUpdatesGetRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public SafebrowsingEncodedUpdatesGetRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;

    public SafebrowsingEncodedUpdatesGetRequest withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;

    public SafebrowsingEncodedUpdatesGetRequest withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    
    public SafebrowsingEncodedUpdatesGetRequest(@JsonProperty("encodedRequest") String encodedRequest) {
        this.encodedRequest = encodedRequest;
  }
}
