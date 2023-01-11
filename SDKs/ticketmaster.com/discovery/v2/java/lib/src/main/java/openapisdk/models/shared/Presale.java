package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Presale
 * Event's Presale Info
**/
public class Presale {
    public String description;
    public Presale withDescription(String description) {
        this.description = description;
        return this;
    }
    public OffsetDateTime endDateTime;
    public Presale withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    public String name;
    public Presale withName(String name) {
        this.name = name;
        return this;
    }
    public OffsetDateTime startDateTime;
    public Presale withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    public String url;
    public Presale withUrl(String url) {
        this.url = url;
        return this;
    }
}