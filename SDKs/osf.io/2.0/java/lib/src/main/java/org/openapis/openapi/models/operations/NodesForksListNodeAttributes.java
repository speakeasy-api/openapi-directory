/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.OffsetDateTime;

/**
 * NodesForksListNodeAttributes - The properties of the node entity.
 */
public class NodesForksListNodeAttributes {
    /**
     * The category of the node, as selected by project contributors.
     */
    
    public NodesForksListNodeAttributesCategoryEnum category;

    public NodesForksListNodeAttributes withCategory(NodesForksListNodeAttributesCategoryEnum category) {
        this.category = category;
        return this;
    }
    
    /**
     * Whether or not this node represents a collection. This value should always be `false`. This field may be deprecated in future versions.
     */
    
    public Boolean collection;

    public NodesForksListNodeAttributes withCollection(Boolean collection) {
        this.collection = collection;
        return this;
    }
    
    /**
     * Whether or not the current user has permission to post comments on this node. Comments on nodes can be set to allow all users to comment (if public) or restricted to only allow comments from contributors.
     */
    
    public Boolean currentUserCanComment;

    public NodesForksListNodeAttributes withCurrentUserCanComment(Boolean currentUserCanComment) {
        this.currentUserCanComment = currentUserCanComment;
        return this;
    }
    
    /**
     * A list of strings representing the permissions for the current user on this node. Valid permissions are "admin", "read", and "write".
     */
    
    public String[] currentUserPermissions;

    public NodesForksListNodeAttributes withCurrentUserPermissions(String[] currentUserPermissions) {
        this.currentUserPermissions = currentUserPermissions;
        return this;
    }
    
    /**
     * The time at which the node was created, as an iso8601 formatted timestamp.
     */
    
    public OffsetDateTime dateCreated;

    public NodesForksListNodeAttributes withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    
    /**
     * The time at which the node was last modified, as an iso8601 formatted timestamp.
     */
    
    public OffsetDateTime dateModified;

    public NodesForksListNodeAttributes withDateModified(OffsetDateTime dateModified) {
        this.dateModified = dateModified;
        return this;
    }
    
    /**
     * The description of the node.
     */
    
    public String description;

    public NodesForksListNodeAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Whether or not this node represents a fork of another node.
     */
    
    public Boolean fork;

    public NodesForksListNodeAttributes withFork(Boolean fork) {
        this.fork = fork;
        return this;
    }
    
    /**
     * If this node is a fork of another node, the time at which the node was created, as an iso8601 formatted timestamp.
     */
    
    public OffsetDateTime forkedDate;

    public NodesForksListNodeAttributes withForkedDate(OffsetDateTime forkedDate) {
        this.forkedDate = forkedDate;
        return this;
    }
    
    /**
     * A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
     */
    
    public String nodeLicense;

    public NodesForksListNodeAttributes withNodeLicense(String nodeLicense) {
        this.nodeLicense = nodeLicense;
        return this;
    }
    
    /**
     * Whether or not a preprint has been created from this node, or if this node was created for a preprint.
     */
    
    public Boolean preprint;

    public NodesForksListNodeAttributes withPreprint(Boolean preprint) {
        this.preprint = preprint;
        return this;
    }
    
    /**
     * Whether or not the node is publicly visible. This field is only editable by project administrators.
     */
    
    public Boolean public_;

    public NodesForksListNodeAttributes withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    
    /**
     * Whether or not the node represents a registration. This value should always be `false`. This field may be deprecated in future versions.
     */
    
    public Boolean registration;

    public NodesForksListNodeAttributes withRegistration(Boolean registration) {
        this.registration = registration;
        return this;
    }
    
    /**
     * A list of strings that describe this node, as entered by project contributors.
     */
    
    public String[] tags;

    public NodesForksListNodeAttributes withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    
    /**
     * The unique ID of the node from which this node was templated, if this node was created from a template.
     */
    
    public String templateFrom;

    public NodesForksListNodeAttributes withTemplateFrom(String templateFrom) {
        this.templateFrom = templateFrom;
        return this;
    }
    
    /**
     * The title of the node.
     */
    
    public String title;

    public NodesForksListNodeAttributes withTitle(String title) {
        this.title = title;
        return this;
    }
    
    public NodesForksListNodeAttributes(@JsonProperty("category") NodesForksListNodeAttributesCategoryEnum category, @JsonProperty("title") String title) {
        this.category = category;
        this.title = title;
  }
}
