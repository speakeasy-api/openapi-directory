/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposCreatePagesSiteRequestBody2 - The source branch and directory used to publish your Pages site.
 */
public class ReposCreatePagesSiteRequestBody2 {
    /**
     * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
     */
    @JsonProperty("build_type")
    public ReposCreatePagesSiteRequestBody2BuildTypeEnum buildType;

    public ReposCreatePagesSiteRequestBody2 withBuildType(ReposCreatePagesSiteRequestBody2BuildTypeEnum buildType) {
        this.buildType = buildType;
        return this;
    }
    
    /**
     * The source branch and directory used to publish your Pages site.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ReposCreatePagesSiteRequestBody2Source source;

    public ReposCreatePagesSiteRequestBody2 withSource(ReposCreatePagesSiteRequestBody2Source source) {
        this.source = source;
        return this;
    }
    
    public ReposCreatePagesSiteRequestBody2(@JsonProperty("build_type") ReposCreatePagesSiteRequestBody2BuildTypeEnum buildType) {
        this.buildType = buildType;
  }
}
