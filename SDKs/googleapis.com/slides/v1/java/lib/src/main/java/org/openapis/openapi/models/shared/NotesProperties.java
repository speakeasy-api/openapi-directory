/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotesProperties - The properties of Page that are only relevant for pages with page_type NOTES.
 */
public class NotesProperties {
    /**
     * The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speakerNotesObjectId")
    public String speakerNotesObjectId;

    public NotesProperties withSpeakerNotesObjectId(String speakerNotesObjectId) {
        this.speakerNotesObjectId = speakerNotesObjectId;
        return this;
    }
    
    public NotesProperties(){}
}
