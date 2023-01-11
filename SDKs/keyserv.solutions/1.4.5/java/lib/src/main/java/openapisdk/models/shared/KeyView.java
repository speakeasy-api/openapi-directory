package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class KeyView {
    @JsonProperty("action")
    public String action;
    public KeyView withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonProperty("callbackOnModify")
    public Boolean callbackOnModify;
    public KeyView withCallbackOnModify(Boolean callbackOnModify) {
        this.callbackOnModify = callbackOnModify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackUrl")
    public String callbackUrl;
    public KeyView withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("commenced")
    public OffsetDateTime commenced;
    public KeyView withCommenced(OffsetDateTime commenced) {
        this.commenced = commenced;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public KeyView withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public Boolean current;
    public KeyView withCurrent(Boolean current) {
        this.current = current;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom")
    public Object custom;
    public KeyView withCustom(Object custom) {
        this.custom = custom;
        return this;
    }
    @JsonProperty("frequency")
    public String frequency;
    public KeyView withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public KeyView withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public KeyView withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public KeyView withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
}