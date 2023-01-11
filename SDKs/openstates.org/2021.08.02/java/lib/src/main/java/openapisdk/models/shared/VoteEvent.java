package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoteEvent {
    @JsonProperty("counts")
    public VoteCount[] counts;
    public VoteEvent withCounts(VoteCount[] counts) {
        this.counts = counts;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public VoteEvent withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public VoteEvent withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motion_classification")
    public String[] motionClassification;
    public VoteEvent withMotionClassification(String[] motionClassification) {
        this.motionClassification = motionClassification;
        return this;
    }
    @JsonProperty("motion_text")
    public String motionText;
    public VoteEvent withMotionText(String motionText) {
        this.motionText = motionText;
        return this;
    }
    @JsonProperty("organization")
    public Organization organization;
    public VoteEvent withOrganization(Organization organization) {
        this.organization = organization;
        return this;
    }
    @JsonProperty("result")
    public String result;
    public VoteEvent withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonProperty("sources")
    public Link[] sources;
    public VoteEvent withSources(Link[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonProperty("start_date")
    public String startDate;
    public VoteEvent withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("votes")
    public PersonVote[] votes;
    public VoteEvent withVotes(PersonVote[] votes) {
        this.votes = votes;
        return this;
    }
}