package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SupersimV1IpCommand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public SupersimV1IpCommand withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public SupersimV1IpCommand withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public SupersimV1IpCommand withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_ip")
    public String deviceIp;
    public SupersimV1IpCommand withDeviceIp(String deviceIp) {
        this.deviceIp = deviceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_port")
    public Long devicePort;
    public SupersimV1IpCommand withDevicePort(Long devicePort) {
        this.devicePort = devicePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public IpCommandEnumDirectionEnum direction;
    public SupersimV1IpCommand withDirection(IpCommandEnumDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public String payload;
    public SupersimV1IpCommand withPayload(String payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload_type")
    public IpCommandEnumPayloadTypeEnum payloadType;
    public SupersimV1IpCommand withPayloadType(IpCommandEnumPayloadTypeEnum payloadType) {
        this.payloadType = payloadType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public SupersimV1IpCommand withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sim_iccid")
    public String simIccid;
    public SupersimV1IpCommand withSimIccid(String simIccid) {
        this.simIccid = simIccid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sim_sid")
    public String simSid;
    public SupersimV1IpCommand withSimSid(String simSid) {
        this.simSid = simSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public IpCommandEnumStatusEnum status;
    public SupersimV1IpCommand withStatus(IpCommandEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SupersimV1IpCommand withUrl(String url) {
        this.url = url;
        return this;
    }
}