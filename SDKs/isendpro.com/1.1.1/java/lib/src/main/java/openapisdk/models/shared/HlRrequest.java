package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlRrequest {
    @JsonProperty("getHLR")
    public HlRrequestGetHlrEnum getHLR;
    public HlRrequest withGetHlr(HlRrequestGetHlrEnum getHLR) {
        this.getHLR = getHLR;
        return this;
    }
    @JsonProperty("keyid")
    public String keyid;
    public HlRrequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonProperty("num")
    public String[] num;
    public HlRrequest withNum(String[] num) {
        this.num = num;
        return this;
    }
}