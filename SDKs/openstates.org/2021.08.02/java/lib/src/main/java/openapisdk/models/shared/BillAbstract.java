package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BillAbstract {
    @JsonProperty("abstract")
    public String abstract_;
    public BillAbstract withAbstract(String abstract_) {
        this.abstract_ = abstract_;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public BillAbstract withNote(String note) {
        this.note = note;
        return this;
    }
}