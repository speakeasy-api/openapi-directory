package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Table {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnHeaders")
    public Headers columnHeaders;
    public Table withColumnHeaders(Headers columnHeaders) {
        this.columnHeaders = columnHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Table withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowHeaders")
    public Headers rowHeaders;
    public Table withRowHeaders(Headers rowHeaders) {
        this.rowHeaders = rowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public Row[] rows;
    public Table withRows(Row[] rows) {
        this.rows = rows;
        return this;
    }
}