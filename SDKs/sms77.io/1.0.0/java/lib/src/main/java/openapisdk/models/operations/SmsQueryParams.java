package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=debug")
    public Double debug;
    public SmsQueryParams withDebug(Double debug) {
        this.debug = debug;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delay")
    public String delay;
    public SmsQueryParams withDelay(String delay) {
        this.delay = delay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=details")
    public Double details;
    public SmsQueryParams withDetails(Double details) {
        this.details = details;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=flash")
    public Double flash;
    public SmsQueryParams withFlash(Double flash) {
        this.flash = flash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=foreign_id")
    public String foreignId;
    public SmsQueryParams withForeignId(String foreignId) {
        this.foreignId = foreignId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public SmsQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=json")
    public Double json;
    public SmsQueryParams withJson(Double json) {
        this.json = json;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=label")
    public String label;
    public SmsQueryParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=no_reload")
    public Double noReload;
    public SmsQueryParams withNoReload(Double noReload) {
        this.noReload = noReload;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=performance_tracking")
    public Double performanceTracking;
    public SmsQueryParams withPerformanceTracking(Double performanceTracking) {
        this.performanceTracking = performanceTracking;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=return_msg_id")
    public Double returnMsgId;
    public SmsQueryParams withReturnMsgId(Double returnMsgId) {
        this.returnMsgId = returnMsgId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SmsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public SmsQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=udh")
    public String udh;
    public SmsQueryParams withUdh(String udh) {
        this.udh = udh;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unicode")
    public Double unicode;
    public SmsQueryParams withUnicode(Double unicode) {
        this.unicode = unicode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=utf8")
    public Double utf8;
    public SmsQueryParams withUtf8(Double utf8) {
        this.utf8 = utf8;
        return this;
    }
}