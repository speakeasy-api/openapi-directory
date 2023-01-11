package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Blacklist {
    @JsonProperty("isListed")
    public Boolean isListed;
    public Blacklist withIsListed(Boolean isListed) {
        this.isListed = isListed;
        return this;
    }
    @JsonProperty("listHost")
    public String listHost;
    public Blacklist withListHost(String listHost) {
        this.listHost = listHost;
        return this;
    }
    @JsonProperty("listName")
    public String listName;
    public Blacklist withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonProperty("listRating")
    public Integer listRating;
    public Blacklist withListRating(Integer listRating) {
        this.listRating = listRating;
        return this;
    }
    @JsonProperty("responseTime")
    public Integer responseTime;
    public Blacklist withResponseTime(Integer responseTime) {
        this.responseTime = responseTime;
        return this;
    }
    @JsonProperty("returnCode")
    public String returnCode;
    public Blacklist withReturnCode(String returnCode) {
        this.returnCode = returnCode;
        return this;
    }
    @JsonProperty("txtRecord")
    public String txtRecord;
    public Blacklist withTxtRecord(String txtRecord) {
        this.txtRecord = txtRecord;
        return this;
    }
}