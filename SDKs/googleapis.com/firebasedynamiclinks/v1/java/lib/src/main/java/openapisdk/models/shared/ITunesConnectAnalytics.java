package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ITunesConnectAnalytics
 * Parameters for iTunes Connect App Analytics.
**/
public class ITunesConnectAnalytics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("at")
    public String at;
    public ITunesConnectAnalytics withAt(String at) {
        this.at = at;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ct")
    public String ct;
    public ITunesConnectAnalytics withCt(String ct) {
        this.ct = ct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mt")
    public String mt;
    public ITunesConnectAnalytics withMt(String mt) {
        this.mt = mt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pt")
    public String pt;
    public ITunesConnectAnalytics withPt(String pt) {
        this.pt = pt;
        return this;
    }
}