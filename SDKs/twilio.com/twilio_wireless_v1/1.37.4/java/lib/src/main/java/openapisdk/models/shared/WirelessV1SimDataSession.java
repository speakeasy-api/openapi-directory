package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class WirelessV1SimDataSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public WirelessV1SimDataSession withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cell_id")
    public String cellId;
    public WirelessV1SimDataSession withCellId(String cellId) {
        this.cellId = cellId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cell_location_estimate")
    public Object cellLocationEstimate;
    public WirelessV1SimDataSession withCellLocationEstimate(Object cellLocationEstimate) {
        this.cellLocationEstimate = cellLocationEstimate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public WirelessV1SimDataSession withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imei")
    public String imei;
    public WirelessV1SimDataSession withImei(String imei) {
        this.imei = imei;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public WirelessV1SimDataSession withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator_country")
    public String operatorCountry;
    public WirelessV1SimDataSession withOperatorCountry(String operatorCountry) {
        this.operatorCountry = operatorCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator_mcc")
    public String operatorMcc;
    public WirelessV1SimDataSession withOperatorMcc(String operatorMcc) {
        this.operatorMcc = operatorMcc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator_mnc")
    public String operatorMnc;
    public WirelessV1SimDataSession withOperatorMnc(String operatorMnc) {
        this.operatorMnc = operatorMnc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator_name")
    public String operatorName;
    public WirelessV1SimDataSession withOperatorName(String operatorName) {
        this.operatorName = operatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packets_downloaded")
    public Long packetsDownloaded;
    public WirelessV1SimDataSession withPacketsDownloaded(Long packetsDownloaded) {
        this.packetsDownloaded = packetsDownloaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("packets_uploaded")
    public Long packetsUploaded;
    public WirelessV1SimDataSession withPacketsUploaded(Long packetsUploaded) {
        this.packetsUploaded = packetsUploaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radio_link")
    public String radioLink;
    public WirelessV1SimDataSession withRadioLink(String radioLink) {
        this.radioLink = radioLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public WirelessV1SimDataSession withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sim_sid")
    public String simSid;
    public WirelessV1SimDataSession withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public WirelessV1SimDataSession withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}