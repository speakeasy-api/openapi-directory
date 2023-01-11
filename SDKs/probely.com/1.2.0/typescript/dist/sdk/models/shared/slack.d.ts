import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for slack notifications
**/
export declare class Slack extends SpeakeasyBase {
    notifyFindingFixed?: boolean;
    notifyHighFindings?: boolean;
    notifyLowFindings?: boolean;
    notifyMediumFindings?: boolean;
    notifyScanCompleted?: boolean;
    notifyScanStarted?: boolean;
    webhookUrl?: string;
}
