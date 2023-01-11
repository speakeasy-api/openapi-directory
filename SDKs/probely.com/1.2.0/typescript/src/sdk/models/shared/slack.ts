import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Slack
/** 
 * Options for slack notifications
**/
export class Slack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notify_finding_fixed" })
  notifyFindingFixed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_high_findings" })
  notifyHighFindings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_low_findings" })
  notifyLowFindings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_medium_findings" })
  notifyMediumFindings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_scan_completed" })
  notifyScanCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notify_scan_started" })
  notifyScanStarted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
