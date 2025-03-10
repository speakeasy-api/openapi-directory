/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InstitutionV1 - Institutions are the entities that create insurance policies.
 */
public class InstitutionV1 {
    @JsonProperty("id")
    public String id;

    public InstitutionV1 withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("name")
    public String name;

    public InstitutionV1 withName(String name) {
        this.name = name;
        return this;
    }
    
    public InstitutionV1(@JsonProperty("id") String id, @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
  }
}
