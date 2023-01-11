package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Bill {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abstracts")
    public BillAbstract[] abstracts;
    public Bill withAbstracts(BillAbstract[] abstracts) {
        this.abstracts = abstracts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public BillAction[] actions;
    public Bill withActions(BillAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public String[] classification;
    public Bill withClassification(String[] classification) {
        this.classification = classification;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Bill withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public BillDocumentOrVersion[] documents;
    public Bill withDocuments(BillDocumentOrVersion[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extras")
    public java.util.Map<String, Object> extras;
    public Bill withExtras(java.util.Map<String, Object> extras) {
        this.extras = extras;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_action_date")
    public String firstActionDate;
    public Bill withFirstActionDate(String firstActionDate) {
        this.firstActionDate = firstActionDate;
        return this;
    }
    @JsonProperty("from_organization")
    public Organization fromOrganization;
    public Bill withFromOrganization(Organization fromOrganization) {
        this.fromOrganization = fromOrganization;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Bill withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public Bill withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonProperty("jurisdiction")
    public CompactJurisdiction jurisdiction;
    public Bill withJurisdiction(CompactJurisdiction jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_action_date")
    public String latestActionDate;
    public Bill withLatestActionDate(String latestActionDate) {
        this.latestActionDate = latestActionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_action_description")
    public String latestActionDescription;
    public Bill withLatestActionDescription(String latestActionDescription) {
        this.latestActionDescription = latestActionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_passage_date")
    public String latestPassageDate;
    public Bill withLatestPassageDate(String latestPassageDate) {
        this.latestPassageDate = latestPassageDate;
        return this;
    }
    @JsonProperty("openstates_url")
    public String openstatesUrl;
    public Bill withOpenstatesUrl(String openstatesUrl) {
        this.openstatesUrl = openstatesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_identifiers")
    public BillIdentifier[] otherIdentifiers;
    public Bill withOtherIdentifiers(BillIdentifier[] otherIdentifiers) {
        this.otherIdentifiers = otherIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_titles")
    public BillTitle[] otherTitles;
    public Bill withOtherTitles(BillTitle[] otherTitles) {
        this.otherTitles = otherTitles;
        return this;
    }
    @JsonProperty("session")
    public String session;
    public Bill withSession(String session) {
        this.session = session;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Link[] sources;
    public Bill withSources(Link[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sponsorships")
    public BillSponsorship[] sponsorships;
    public Bill withSponsorships(BillSponsorship[] sponsorships) {
        this.sponsorships = sponsorships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String[] subject;
    public Bill withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public Bill withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Bill withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public BillDocumentOrVersion[] versions;
    public Bill withVersions(BillDocumentOrVersion[] versions) {
        this.versions = versions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("votes")
    public VoteEvent[] votes;
    public Bill withVotes(VoteEvent[] votes) {
        this.votes = votes;
        return this;
    }
}