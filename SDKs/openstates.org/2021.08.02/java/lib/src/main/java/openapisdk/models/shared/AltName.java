package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AltName {
    @JsonProperty("name")
    public String name;
    public AltName withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public AltName withNote(String note) {
        this.note = note;
        return this;
    }
}