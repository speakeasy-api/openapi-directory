/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Topic - A topic aggregates entities that are related to a subject.
 */
public class Topic {
    @JsonProperty("names")
    public String[] names;

    public Topic withNames(String[] names) {
        this.names = names;
        return this;
    }
    
    public Topic(@JsonProperty("names") String[] names) {
        this.names = names;
  }
}
