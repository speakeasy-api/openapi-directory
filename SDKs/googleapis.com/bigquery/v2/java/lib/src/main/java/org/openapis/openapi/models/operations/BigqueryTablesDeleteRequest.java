/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class BigqueryTablesDeleteRequest {
    /**
     * Data format for the response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public org.openapis.openapi.models.shared.AltEnum alt;

    public BigqueryTablesDeleteRequest withAlt(org.openapis.openapi.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    
    /**
     * Dataset ID of the table to delete
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;

    public BigqueryTablesDeleteRequest withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    
    /**
     * Selector specifying which fields to include in a partial response.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public BigqueryTablesDeleteRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;

    public BigqueryTablesDeleteRequest withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * OAuth 2.0 token for the current user.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;

    public BigqueryTablesDeleteRequest withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    
    /**
     * Returns response with indentations and line breaks.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;

    public BigqueryTablesDeleteRequest withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    
    /**
     * Project ID of the table to delete
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;

    public BigqueryTablesDeleteRequest withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;

    public BigqueryTablesDeleteRequest withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    
    /**
     * Table ID of the table to delete
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tableId")
    public String tableId;

    public BigqueryTablesDeleteRequest withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    
    /**
     * Deprecated. Please use quotaUser instead.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;

    public BigqueryTablesDeleteRequest withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    
    public BigqueryTablesDeleteRequest(@JsonProperty("datasetId") String datasetId, @JsonProperty("projectId") String projectId, @JsonProperty("tableId") String tableId) {
        this.datasetId = datasetId;
        this.projectId = projectId;
        this.tableId = tableId;
  }
}
