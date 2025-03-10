/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;

/**
 * ViewOnlyLinksReadViewOnlyLinksAttributes - The properties of the view only link entity.
 */
public class ViewOnlyLinksReadViewOnlyLinksAttributes {
    /**
     * Whether or not the view only link has anonymized contributors
     */
    
    public Boolean anonymous;

    public ViewOnlyLinksReadViewOnlyLinksAttributes withAnonymous(Boolean anonymous) {
        this.anonymous = anonymous;
        return this;
    }
    
    /**
     * The time at which the view only link was created, as an iso8601 formatted timestamp.
     */
    
    public OffsetDateTime dateCreated;

    public ViewOnlyLinksReadViewOnlyLinksAttributes withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    
    /**
     * The view only key
     */
    
    public String key;

    public ViewOnlyLinksReadViewOnlyLinksAttributes withKey(String key) {
        this.key = key;
        return this;
    }
    
    /**
     * The name of the view only link
     */
    
    public String name;

    public ViewOnlyLinksReadViewOnlyLinksAttributes withName(String name) {
        this.name = name;
        return this;
    }
    
    public ViewOnlyLinksReadViewOnlyLinksAttributes(){}
}
