package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Sms200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Float balance;
    public Sms200ApplicationJson withBalance(Float balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public String debug;
    public Sms200ApplicationJson withDebug(String debug) {
        this.debug = debug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public Sms200ApplicationJsonMessages[] messages;
    public Sms200ApplicationJson withMessages(Sms200ApplicationJsonMessages[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_type")
    public Sms200ApplicationJsonSmsTypeEnum smsType;
    public Sms200ApplicationJson withSmsType(Sms200ApplicationJsonSmsTypeEnum smsType) {
        this.smsType = smsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public String success;
    public Sms200ApplicationJson withSuccess(String success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_price")
    public Float totalPrice;
    public Sms200ApplicationJson withTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
        return this;
    }
}