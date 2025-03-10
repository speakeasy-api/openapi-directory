/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum - The [reaction type](https://docs.github.com/enterprise-server@3.6/rest/reference/reactions#reaction-types) to add to the pull request review comment.
 */
public enum ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum {
    PLUS1("+1"),
    MINUS1("-1"),
    LAUGH("laugh"),
    CONFUSED("confused"),
    HEART("heart"),
    HOORAY("hooray"),
    ROCKET("rocket"),
    EYES("eyes");

    @JsonValue
    public final String value;

    private ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum(String value) {
        this.value = value;
    }
}
