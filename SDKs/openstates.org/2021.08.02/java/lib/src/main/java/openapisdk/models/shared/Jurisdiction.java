package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Jurisdiction {
    @JsonProperty("classification")
    public JurisdictionClassificationEnum classification;
    public Jurisdiction withClassification(JurisdictionClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division_id")
    public String divisionId;
    public Jurisdiction withDivisionId(String divisionId) {
        this.divisionId = divisionId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Jurisdiction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_runs")
    public RunPlan[] latestRuns;
    public Jurisdiction withLatestRuns(RunPlan[] latestRuns) {
        this.latestRuns = latestRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legislative_sessions")
    public LegislativeSession[] legislativeSessions;
    public Jurisdiction withLegislativeSessions(LegislativeSession[] legislativeSessions) {
        this.legislativeSessions = legislativeSessions;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Jurisdiction withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations")
    public Chamber[] organizations;
    public Jurisdiction withOrganizations(Chamber[] organizations) {
        this.organizations = organizations;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Jurisdiction withUrl(String url) {
        this.url = url;
        return this;
    }
}