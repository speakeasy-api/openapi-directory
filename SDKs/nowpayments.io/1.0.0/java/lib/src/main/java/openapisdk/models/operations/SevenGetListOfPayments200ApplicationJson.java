package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SevenGetListOfPayments200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SevenGetListOfPayments200ApplicationJsonData[] data;
    public SevenGetListOfPayments200ApplicationJson withData(SevenGetListOfPayments200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Double limit;
    public SevenGetListOfPayments200ApplicationJson withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Double page;
    public SevenGetListOfPayments200ApplicationJson withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagesCount")
    public Double pagesCount;
    public SevenGetListOfPayments200ApplicationJson withPagesCount(Double pagesCount) {
        this.pagesCount = pagesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public SevenGetListOfPayments200ApplicationJson withTotal(Double total) {
        this.total = total;
        return this;
    }
}