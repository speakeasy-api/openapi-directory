package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupersimV1UsageRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public SupersimV1UsageRecord withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billed_unit")
    public String billedUnit;
    public SupersimV1UsageRecord withBilledUnit(String billedUnit) {
        this.billedUnit = billedUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_download")
    public Long dataDownload;
    public SupersimV1UsageRecord withDataDownload(Long dataDownload) {
        this.dataDownload = dataDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_total")
    public Long dataTotal;
    public SupersimV1UsageRecord withDataTotal(Long dataTotal) {
        this.dataTotal = dataTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_total_billed")
    public Double dataTotalBilled;
    public SupersimV1UsageRecord withDataTotalBilled(Double dataTotalBilled) {
        this.dataTotalBilled = dataTotalBilled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_upload")
    public Long dataUpload;
    public SupersimV1UsageRecord withDataUpload(Long dataUpload) {
        this.dataUpload = dataUpload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleet_sid")
    public String fleetSid;
    public SupersimV1UsageRecord withFleetSid(String fleetSid) {
        this.fleetSid = fleetSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public SupersimV1UsageRecord withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_sid")
    public String networkSid;
    public SupersimV1UsageRecord withNetworkSid(String networkSid) {
        this.networkSid = networkSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Object period;
    public SupersimV1UsageRecord withPeriod(Object period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sim_sid")
    public String simSid;
    public SupersimV1UsageRecord withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
}