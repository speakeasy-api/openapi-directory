package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Slack
 * Options for slack notifications
**/
public class Slack {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_finding_fixed")
    public Boolean notifyFindingFixed;
    public Slack withNotifyFindingFixed(Boolean notifyFindingFixed) {
        this.notifyFindingFixed = notifyFindingFixed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_high_findings")
    public Boolean notifyHighFindings;
    public Slack withNotifyHighFindings(Boolean notifyHighFindings) {
        this.notifyHighFindings = notifyHighFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_low_findings")
    public Boolean notifyLowFindings;
    public Slack withNotifyLowFindings(Boolean notifyLowFindings) {
        this.notifyLowFindings = notifyLowFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_medium_findings")
    public Boolean notifyMediumFindings;
    public Slack withNotifyMediumFindings(Boolean notifyMediumFindings) {
        this.notifyMediumFindings = notifyMediumFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_scan_completed")
    public Boolean notifyScanCompleted;
    public Slack withNotifyScanCompleted(Boolean notifyScanCompleted) {
        this.notifyScanCompleted = notifyScanCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notify_scan_started")
    public Boolean notifyScanStarted;
    public Slack withNotifyScanStarted(Boolean notifyScanStarted) {
        this.notifyScanStarted = notifyScanStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_url")
    public String webhookUrl;
    public Slack withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}