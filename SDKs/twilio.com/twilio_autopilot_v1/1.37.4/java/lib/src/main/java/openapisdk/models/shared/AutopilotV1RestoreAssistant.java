package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AutopilotV1RestoreAssistant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public AutopilotV1RestoreAssistant withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_events")
    public String callbackEvents;
    public AutopilotV1RestoreAssistant withCallbackEvents(String callbackEvents) {
        this.callbackEvents = callbackEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public AutopilotV1RestoreAssistant withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public AutopilotV1RestoreAssistant withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_updated")
    public OffsetDateTime dateUpdated;
    public AutopilotV1RestoreAssistant withDateUpdated(OffsetDateTime dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("development_stage")
    public String developmentStage;
    public AutopilotV1RestoreAssistant withDevelopmentStage(String developmentStage) {
        this.developmentStage = developmentStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public AutopilotV1RestoreAssistant withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latest_model_build_sid")
    public String latestModelBuildSid;
    public AutopilotV1RestoreAssistant withLatestModelBuildSid(String latestModelBuildSid) {
        this.latestModelBuildSid = latestModelBuildSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("log_queries")
    public Boolean logQueries;
    public AutopilotV1RestoreAssistant withLogQueries(Boolean logQueries) {
        this.logQueries = logQueries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("needs_model_build")
    public Boolean needsModelBuild;
    public AutopilotV1RestoreAssistant withNeedsModelBuild(Boolean needsModelBuild) {
        this.needsModelBuild = needsModelBuild;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public AutopilotV1RestoreAssistant withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unique_name")
    public String uniqueName;
    public AutopilotV1RestoreAssistant withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}