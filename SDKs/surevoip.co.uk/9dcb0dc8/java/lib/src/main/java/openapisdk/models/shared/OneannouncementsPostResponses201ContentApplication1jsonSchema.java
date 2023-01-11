package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneannouncementsPostResponses201ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("announcement")
    public OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement announcement;
    public OneannouncementsPostResponses201ContentApplication1jsonSchema withAnnouncement(OneannouncementsPostResponses201ContentApplication1jsonSchemaAnnouncement announcement) {
        this.announcement = announcement;
        return this;
    }
}