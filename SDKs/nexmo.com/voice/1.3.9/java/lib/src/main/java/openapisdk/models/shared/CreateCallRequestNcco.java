package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCallRequestNcco {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_method")
    public CreateCallRequestNccoEventMethodEnum eventMethod;
    public CreateCallRequestNcco withEventMethod(CreateCallRequestNccoEventMethodEnum eventMethod) {
        this.eventMethod = eventMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public String[] eventUrl;
    public CreateCallRequestNcco withEventUrl(String[] eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonProperty("from")
    public EndpointPhoneFrom from;
    public CreateCallRequestNcco withFrom(EndpointPhoneFrom from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length_timer")
    public Long lengthTimer;
    public CreateCallRequestNcco withLengthTimer(Long lengthTimer) {
        this.lengthTimer = lengthTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine_detection")
    public CreateCallRequestNccoMachineDetectionEnum machineDetection;
    public CreateCallRequestNcco withMachineDetection(CreateCallRequestNccoMachineDetectionEnum machineDetection) {
        this.machineDetection = machineDetection;
        return this;
    }
    @JsonProperty("ncco")
    public java.util.Map<String, Object>[] ncco;
    public CreateCallRequestNcco withNcco(java.util.Map<String, Object>[] ncco) {
        this.ncco = ncco;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("random_from_number")
    public Boolean randomFromNumber;
    public CreateCallRequestNcco withRandomFromNumber(Boolean randomFromNumber) {
        this.randomFromNumber = randomFromNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ringing_timer")
    public Long ringingTimer;
    public CreateCallRequestNcco withRingingTimer(Long ringingTimer) {
        this.ringingTimer = ringingTimer;
        return this;
    }
    @JsonProperty("to")
    public Object[] to;
    public CreateCallRequestNcco withTo(Object[] to) {
        this.to = to;
        return this;
    }
}