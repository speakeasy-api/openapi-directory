package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NameMatchCandidatesOut
 * Classified matched names
**/
public class NameMatchCandidatesOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public NameMatchCandidatesOut withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NameMatchCandidatesOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public NameMatchCandidatesOut withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchCandidates")
    public NameMatchCandidateOut[] matchCandidates;
    public NameMatchCandidatesOut withMatchCandidates(NameMatchCandidateOut[] matchCandidates) {
        this.matchCandidates = matchCandidates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderOption")
    public String orderOption;
    public NameMatchCandidatesOut withOrderOption(String orderOption) {
        this.orderOption = orderOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public NameMatchCandidatesOut withScript(String script) {
        this.script = script;
        return this;
    }
}