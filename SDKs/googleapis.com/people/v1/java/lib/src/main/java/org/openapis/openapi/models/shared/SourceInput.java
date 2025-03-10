/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SourceInput - The source of a field.
 */
public class SourceInput {
    /**
     * **Only populated in `person.metadata.sources`.** The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the source. Used for web cache validation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;

    public SourceInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    
    /**
     * The unique identifier within the source type generated by the server.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public SourceInput withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The source type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SourceTypeEnum type;

    public SourceInput withType(SourceTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public SourceInput(){}
}
