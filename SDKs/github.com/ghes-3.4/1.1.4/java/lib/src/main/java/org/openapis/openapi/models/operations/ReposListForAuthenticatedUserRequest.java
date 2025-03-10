/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ReposListForAuthenticatedUserRequest {
    /**
     * Comma-separated list of values. Can include:  
     *  * `owner`: Repositories that are owned by the authenticated user.  
     *  * `collaborator`: Repositories that the user has been added to as a collaborator.  
     *  * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=affiliation")
    public String affiliation;

    public ReposListForAuthenticatedUserRequest withAffiliation(String affiliation) {
        this.affiliation = affiliation;
        return this;
    }
    
    /**
     * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public OffsetDateTime before;

    public ReposListForAuthenticatedUserRequest withBefore(OffsetDateTime before) {
        this.before = before;
        return this;
    }
    
    /**
     * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public ReposListForAuthenticatedUserDirectionEnum direction;

    public ReposListForAuthenticatedUserRequest withDirection(ReposListForAuthenticatedUserDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public ReposListForAuthenticatedUserRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results per page (max 100).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public ReposListForAuthenticatedUserRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public OffsetDateTime since;

    public ReposListForAuthenticatedUserRequest withSince(OffsetDateTime since) {
        this.since = since;
        return this;
    }
    
    /**
     * The property to sort the results by.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ReposListForAuthenticatedUserSortEnum sort;

    public ReposListForAuthenticatedUserRequest withSort(ReposListForAuthenticatedUserSortEnum sort) {
        this.sort = sort;
        return this;
    }
    
    /**
     * Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ReposListForAuthenticatedUserTypeEnum type;

    public ReposListForAuthenticatedUserRequest withType(ReposListForAuthenticatedUserTypeEnum type) {
        this.type = type;
        return this;
    }
    
    /**
     * Limit results to repositories with the specified visibility.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=visibility")
    public ReposListForAuthenticatedUserVisibilityEnum visibility;

    public ReposListForAuthenticatedUserRequest withVisibility(ReposListForAuthenticatedUserVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
    
    public ReposListForAuthenticatedUserRequest(){}
}
