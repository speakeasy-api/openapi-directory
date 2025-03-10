/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagBinding - A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
 */
public class TagBinding {
    /**
     * Output only. The name of the TagBinding. This is a String of the form: `tagBindings/{full-resource-name}/{tag-value-name}` (e.g. `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public TagBinding withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123`
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;

    public TagBinding withParent(String parent) {
        this.parent = parent;
        return this;
    }
    
    /**
     * The TagValue of the TagBinding. Must be of the form `tagValues/456`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValue")
    public String tagValue;

    public TagBinding withTagValue(String tagValue) {
        this.tagValue = tagValue;
        return this;
    }
    
    /**
     * The namespaced name for the TagValue of the TagBinding. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`. For methods that support TagValue namespaced name, only one of tag_value_namespaced_name or tag_value may be filled. Requests with both fields will be rejected.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValueNamespacedName")
    public String tagValueNamespacedName;

    public TagBinding withTagValueNamespacedName(String tagValueNamespacedName) {
        this.tagValueNamespacedName = tagValueNamespacedName;
        return this;
    }
    
    public TagBinding(){}
}
