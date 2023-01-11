package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillDocumentOrVersion {
    @JsonProperty("date")
    public String date;
    public BillDocumentOrVersion withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("links")
    public BillDocumentLink[] links;
    public BillDocumentOrVersion withLinks(BillDocumentLink[] links) {
        this.links = links;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public BillDocumentOrVersion withNote(String note) {
        this.note = note;
        return this;
    }
}