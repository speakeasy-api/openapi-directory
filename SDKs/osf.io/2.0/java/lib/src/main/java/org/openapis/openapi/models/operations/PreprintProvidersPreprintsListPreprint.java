/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PreprintProvidersPreprintsListPreprint {
    /**
     * The properties of the preprint entity.
     */
    
    public PreprintProvidersPreprintsListPreprintAttributes attributes;

    public PreprintProvidersPreprintsListPreprint withAttributes(PreprintProvidersPreprintsListPreprintAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    
    /**
     * The identifier of the preprint entity.
     */
    
    public String id;

    public PreprintProvidersPreprintsListPreprint withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * URLs to alternative representations of the preprint entity.
     */
    
    public PreprintProvidersPreprintsListPreprintLinks links;

    public PreprintProvidersPreprintsListPreprint withLinks(PreprintProvidersPreprintsListPreprintLinks links) {
        this.links = links;
        return this;
    }
    
    /**
     * URLs to other entities or entity collections that have a relationship to the preprint entity.
     */
    
    public PreprintProvidersPreprintsListPreprintRelationships relationships;

    public PreprintProvidersPreprintsListPreprint withRelationships(PreprintProvidersPreprintsListPreprintRelationships relationships) {
        this.relationships = relationships;
        return this;
    }
    
    /**
     * The type identifier of the preprint entity (`preprints`).
     */
    
    public String type;

    public PreprintProvidersPreprintsListPreprint withType(String type) {
        this.type = type;
        return this;
    }
    
    public PreprintProvidersPreprintsListPreprint(@JsonProperty("relationships") PreprintProvidersPreprintsListPreprintRelationships relationships, @JsonProperty("type") String type) {
        this.relationships = relationships;
        this.type = type;
  }
}
