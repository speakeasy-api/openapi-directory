package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCallRequestAnswerUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answer_method")
    public CreateCallRequestAnswerUrlAnswerMethodEnum answerMethod;
    public CreateCallRequestAnswerUrl withAnswerMethod(CreateCallRequestAnswerUrlAnswerMethodEnum answerMethod) {
        this.answerMethod = answerMethod;
        return this;
    }
    @JsonProperty("answer_url")
    public String[] answerUrl;
    public CreateCallRequestAnswerUrl withAnswerUrl(String[] answerUrl) {
        this.answerUrl = answerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_method")
    public CreateCallRequestAnswerUrlEventMethodEnum eventMethod;
    public CreateCallRequestAnswerUrl withEventMethod(CreateCallRequestAnswerUrlEventMethodEnum eventMethod) {
        this.eventMethod = eventMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public String[] eventUrl;
    public CreateCallRequestAnswerUrl withEventUrl(String[] eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonProperty("from")
    public EndpointPhoneFrom from;
    public CreateCallRequestAnswerUrl withFrom(EndpointPhoneFrom from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length_timer")
    public Long lengthTimer;
    public CreateCallRequestAnswerUrl withLengthTimer(Long lengthTimer) {
        this.lengthTimer = lengthTimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machine_detection")
    public CreateCallRequestAnswerUrlMachineDetectionEnum machineDetection;
    public CreateCallRequestAnswerUrl withMachineDetection(CreateCallRequestAnswerUrlMachineDetectionEnum machineDetection) {
        this.machineDetection = machineDetection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("random_from_number")
    public Boolean randomFromNumber;
    public CreateCallRequestAnswerUrl withRandomFromNumber(Boolean randomFromNumber) {
        this.randomFromNumber = randomFromNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ringing_timer")
    public Long ringingTimer;
    public CreateCallRequestAnswerUrl withRingingTimer(Long ringingTimer) {
        this.ringingTimer = ringingTimer;
        return this;
    }
    @JsonProperty("to")
    public Object[] to;
    public CreateCallRequestAnswerUrl withTo(Object[] to) {
        this.to = to;
        return this;
    }
}