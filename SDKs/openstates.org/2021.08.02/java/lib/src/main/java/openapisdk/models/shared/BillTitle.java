package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillTitle {
    @JsonProperty("note")
    public String note;
    public BillTitle withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public BillTitle withTitle(String title) {
        this.title = title;
        return this;
    }
}