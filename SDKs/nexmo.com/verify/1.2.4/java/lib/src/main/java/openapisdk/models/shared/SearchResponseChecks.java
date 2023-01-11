package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResponseChecks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public SearchResponseChecks withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_received")
    public String dateReceived;
    public SearchResponseChecks withDateReceived(String dateReceived) {
        this.dateReceived = dateReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public SearchResponseChecks withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SearchResponseChecksStatusEnum status;
    public SearchResponseChecks withStatus(SearchResponseChecksStatusEnum status) {
        this.status = status;
        return this;
    }
}