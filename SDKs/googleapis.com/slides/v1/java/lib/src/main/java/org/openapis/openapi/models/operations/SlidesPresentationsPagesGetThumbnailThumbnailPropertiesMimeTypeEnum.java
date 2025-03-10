/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum - The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
 */
public enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum {
    PNG("PNG");

    @JsonValue
    public final String value;

    private SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum(String value) {
        this.value = value;
    }
}
