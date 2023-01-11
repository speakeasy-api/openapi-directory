package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Query
 * The query definition used for search and export.
**/
public class Query {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountInfo")
    public AccountInfo accountInfo;
    public Query withAccountInfo(AccountInfo accountInfo) {
        this.accountInfo = accountInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corpus")
    public QueryCorpusEnum corpus;
    public Query withCorpus(QueryCorpusEnum corpus) {
        this.corpus = corpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataScope")
    public QueryDataScopeEnum dataScope;
    public Query withDataScope(QueryDataScopeEnum dataScope) {
        this.dataScope = dataScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveOptions")
    public DriveOptions driveOptions;
    public Query withDriveOptions(DriveOptions driveOptions) {
        this.driveOptions = driveOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public Query withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangoutsChatInfo")
    public HangoutsChatInfo hangoutsChatInfo;
    public Query withHangoutsChatInfo(HangoutsChatInfo hangoutsChatInfo) {
        this.hangoutsChatInfo = hangoutsChatInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangoutsChatOptions")
    public HangoutsChatOptions hangoutsChatOptions;
    public Query withHangoutsChatOptions(HangoutsChatOptions hangoutsChatOptions) {
        this.hangoutsChatOptions = hangoutsChatOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailOptions")
    public MailOptions mailOptions;
    public Query withMailOptions(MailOptions mailOptions) {
        this.mailOptions = mailOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public QueryMethodEnum method;
    public Query withMethod(QueryMethodEnum method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnitInfo")
    public OrgUnitInfo orgUnitInfo;
    public Query withOrgUnitInfo(OrgUnitInfo orgUnitInfo) {
        this.orgUnitInfo = orgUnitInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchMethod")
    public QuerySearchMethodEnum searchMethod;
    public Query withSearchMethod(QuerySearchMethodEnum searchMethod) {
        this.searchMethod = searchMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedDriveInfo")
    public SharedDriveInfo sharedDriveInfo;
    public Query withSharedDriveInfo(SharedDriveInfo sharedDriveInfo) {
        this.sharedDriveInfo = sharedDriveInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sitesUrlInfo")
    public SitesUrlInfo sitesUrlInfo;
    public Query withSitesUrlInfo(SitesUrlInfo sitesUrlInfo) {
        this.sitesUrlInfo = sitesUrlInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public Query withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDriveInfo")
    public TeamDriveInfo teamDriveInfo;
    public Query withTeamDriveInfo(TeamDriveInfo teamDriveInfo) {
        this.teamDriveInfo = teamDriveInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public String terms;
    public Query withTerms(String terms) {
        this.terms = terms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public Query withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceOptions")
    public VoiceOptions voiceOptions;
    public Query withVoiceOptions(VoiceOptions voiceOptions) {
        this.voiceOptions = voiceOptions;
        return this;
    }
}