package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportOptions
 * Additional options for exports
**/
public class ExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveOptions")
    public DriveExportOptions driveOptions;
    public ExportOptions withDriveOptions(DriveExportOptions driveOptions) {
        this.driveOptions = driveOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsOptions")
    public GroupsExportOptions groupsOptions;
    public ExportOptions withGroupsOptions(GroupsExportOptions groupsOptions) {
        this.groupsOptions = groupsOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hangoutsChatOptions")
    public HangoutsChatExportOptions hangoutsChatOptions;
    public ExportOptions withHangoutsChatOptions(HangoutsChatExportOptions hangoutsChatOptions) {
        this.hangoutsChatOptions = hangoutsChatOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailOptions")
    public MailExportOptions mailOptions;
    public ExportOptions withMailOptions(MailExportOptions mailOptions) {
        this.mailOptions = mailOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public ExportOptionsRegionEnum region;
    public ExportOptions withRegion(ExportOptionsRegionEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceOptions")
    public VoiceExportOptions voiceOptions;
    public ExportOptions withVoiceOptions(VoiceExportOptions voiceOptions) {
        this.voiceOptions = voiceOptions;
        return this;
    }
}