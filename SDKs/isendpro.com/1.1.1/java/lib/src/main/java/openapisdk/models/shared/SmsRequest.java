package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SmsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_envoi")
    public String dateEnvoi;
    public SmsRequest withDateEnvoi(String dateEnvoi) {
        this.dateEnvoi = dateEnvoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emetteur")
    public String emetteur;
    public SmsRequest withEmetteur(String emetteur) {
        this.emetteur = emetteur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmt_zone")
    public SmsRequestGmtZoneEnum gmtZone;
    public SmsRequest withGmtZone(SmsRequestGmtZoneEnum gmtZone) {
        this.gmtZone = gmtZone;
        return this;
    }
    @JsonProperty("keyid")
    public String keyid;
    public SmsRequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nostop")
    public String nostop;
    public SmsRequest withNostop(String nostop) {
        this.nostop = nostop;
        return this;
    }
    @JsonProperty("num")
    public String[] num;
    public SmsRequest withNum(String[] num) {
        this.num = num;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numAzur")
    public SmsRequestNumAzurEnum numAzur;
    public SmsRequest withNumAzur(SmsRequestNumAzurEnum numAzur) {
        this.numAzur = numAzur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repertoireId")
    public String repertoireId;
    public SmsRequest withRepertoireId(String repertoireId) {
        this.repertoireId = repertoireId;
        return this;
    }
    @JsonProperty("sms")
    public String[] sms;
    public SmsRequest withSms(String[] sms) {
        this.sms = sms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smslong")
    public String smslong;
    public SmsRequest withSmslong(String smslong) {
        this.smslong = smslong;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracker")
    public String[] tracker;
    public SmsRequest withTracker(String[] tracker) {
        this.tracker = tracker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ucs2")
    public String ucs2;
    public SmsRequest withUcs2(String ucs2) {
        this.ucs2 = ucs2;
        return this;
    }
}