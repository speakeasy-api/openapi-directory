/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ReposCreateInOrgRequestBodyVisibilityEnum - The visibility of the repository. **Note**: For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/enterprise-server@3.5/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.  
 * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
 */
public enum ReposCreateInOrgRequestBodyVisibilityEnum {
    PUBLIC_("public"),
    PRIVATE_("private"),
    INTERNAL("internal");

    @JsonValue
    public final String value;

    private ReposCreateInOrgRequestBodyVisibilityEnum(String value) {
        this.value = value;
    }
}
