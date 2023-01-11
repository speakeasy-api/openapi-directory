package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceId")
    public String conferenceId;
    public ConferenceData withConferenceId(String conferenceId) {
        this.conferenceId = conferenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conferenceSolution")
    public ConferenceSolution conferenceSolution;
    public ConferenceData withConferenceSolution(ConferenceSolution conferenceSolution) {
        this.conferenceSolution = conferenceSolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createRequest")
    public CreateConferenceRequest createRequest;
    public ConferenceData withCreateRequest(CreateConferenceRequest createRequest) {
        this.createRequest = createRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryPoints")
    public EntryPoint[] entryPoints;
    public ConferenceData withEntryPoints(EntryPoint[] entryPoints) {
        this.entryPoints = entryPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public ConferenceData withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public ConferenceParameters parameters;
    public ConferenceData withParameters(ConferenceParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature")
    public String signature;
    public ConferenceData withSignature(String signature) {
        this.signature = signature;
        return this;
    }
}