/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * ApplicationGrant - The authorization associated with an OAuth Access.
 */
public class ApplicationGrant {
    @JsonProperty("app")
    public ApplicationGrantApp app;

    public ApplicationGrant withApp(ApplicationGrantApp app) {
        this.app = app;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public ApplicationGrant withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonProperty("id")
    public Long id;

    public ApplicationGrant withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("scopes")
    public String[] scopes;

    public ApplicationGrant withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public ApplicationGrant withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    @JsonProperty("url")
    public String url;

    public ApplicationGrant withUrl(String url) {
        this.url = url;
        return this;
    }
    
    /**
     * A GitHub user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public NullableSimpleUser user;

    public ApplicationGrant withUser(NullableSimpleUser user) {
        this.user = user;
        return this;
    }
    
    public ApplicationGrant(@JsonProperty("app") ApplicationGrantApp app, @JsonProperty("created_at") OffsetDateTime createdAt, @JsonProperty("id") Long id, @JsonProperty("scopes") String[] scopes, @JsonProperty("updated_at") OffsetDateTime updatedAt, @JsonProperty("url") String url) {
        this.app = app;
        this.createdAt = createdAt;
        this.id = id;
        this.scopes = scopes;
        this.updatedAt = updatedAt;
        this.url = url;
  }
}
