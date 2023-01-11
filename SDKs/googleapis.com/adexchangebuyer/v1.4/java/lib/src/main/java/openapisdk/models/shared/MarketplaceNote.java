package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MarketplaceNote
 * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
**/
public class MarketplaceNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorRole")
    public String creatorRole;
    public MarketplaceNote withCreatorRole(String creatorRole) {
        this.creatorRole = creatorRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public MarketplaceNote withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MarketplaceNote withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public MarketplaceNote withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noteId")
    public String noteId;
    public MarketplaceNote withNoteId(String noteId) {
        this.noteId = noteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalId")
    public String proposalId;
    public MarketplaceNote withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevisionNumber")
    public String proposalRevisionNumber;
    public MarketplaceNote withProposalRevisionNumber(String proposalRevisionNumber) {
        this.proposalRevisionNumber = proposalRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampMs")
    public String timestampMs;
    public MarketplaceNote withTimestampMs(String timestampMs) {
        this.timestampMs = timestampMs;
        return this;
    }
}