package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorpusQuery
 * Service-specific options for holds.
**/
public class CorpusQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveQuery")
    public HeldDriveQuery driveQuery;
    public CorpusQuery withDriveQuery(HeldDriveQuery driveQuery) {
        this.driveQuery = driveQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsQuery")
    public HeldGroupsQuery groupsQuery;
    public CorpusQuery withGroupsQuery(HeldGroupsQuery groupsQuery) {
        this.groupsQuery = groupsQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangoutsChatQuery")
    public HeldHangoutsChatQuery hangoutsChatQuery;
    public CorpusQuery withHangoutsChatQuery(HeldHangoutsChatQuery hangoutsChatQuery) {
        this.hangoutsChatQuery = hangoutsChatQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailQuery")
    public HeldMailQuery mailQuery;
    public CorpusQuery withMailQuery(HeldMailQuery mailQuery) {
        this.mailQuery = mailQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceQuery")
    public HeldVoiceQuery voiceQuery;
    public CorpusQuery withVoiceQuery(HeldVoiceQuery voiceQuery) {
        this.voiceQuery = voiceQuery;
        return this;
    }
}