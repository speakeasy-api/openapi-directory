package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SmsUniqueRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_envoi")
    public String dateEnvoi;
    public SmsUniqueRequest withDateEnvoi(String dateEnvoi) {
        this.dateEnvoi = dateEnvoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emetteur")
    public String emetteur;
    public SmsUniqueRequest withEmetteur(String emetteur) {
        this.emetteur = emetteur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmt_zone")
    public SmsUniqueRequestGmtZoneEnum gmtZone;
    public SmsUniqueRequest withGmtZone(SmsUniqueRequestGmtZoneEnum gmtZone) {
        this.gmtZone = gmtZone;
        return this;
    }
    @JsonProperty("keyid")
    public String keyid;
    public SmsUniqueRequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nostop")
    public String nostop;
    public SmsUniqueRequest withNostop(String nostop) {
        this.nostop = nostop;
        return this;
    }
    @JsonProperty("num")
    public String num;
    public SmsUniqueRequest withNum(String num) {
        this.num = num;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numAzur")
    public SmsUniqueRequestNumAzurEnum numAzur;
    public SmsUniqueRequest withNumAzur(SmsUniqueRequestNumAzurEnum numAzur) {
        this.numAzur = numAzur;
        return this;
    }
    @JsonProperty("sms")
    public String sms;
    public SmsUniqueRequest withSms(String sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smslong")
    public String smslong;
    public SmsUniqueRequest withSmslong(String smslong) {
        this.smslong = smslong;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracker")
    public String tracker;
    public SmsUniqueRequest withTracker(String tracker) {
        this.tracker = tracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ucs2")
    public String ucs2;
    public SmsUniqueRequest withUcs2(String ucs2) {
        this.ucs2 = ucs2;
        return this;
    }
}