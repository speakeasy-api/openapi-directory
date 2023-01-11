package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReports200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_count")
    public Long itemsCount;
    public ListReports200ApplicationJson withItemsCount(Long itemsCount) {
        this.itemsCount = itemsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reports")
    public java.util.Map<String, Object>[] reports;
    public ListReports200ApplicationJson withReports(java.util.Map<String, Object>[] reports) {
        this.reports = reports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self_link")
    public String selfLink;
    public ListReports200ApplicationJson withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}