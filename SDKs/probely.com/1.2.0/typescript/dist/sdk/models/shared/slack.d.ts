import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for slack notifications
 */
export declare class Slack extends SpeakeasyBase {
    /**
     * Notify of fixed findings.
     */
    notifyFindingFixed?: boolean;
    /**
     * Notify of new high severity findings.
     */
    notifyHighFindings?: boolean;
    /**
     * Notify of new low severity findings.
     */
    notifyLowFindings?: boolean;
    /**
     * Notify of new medium severity findings.
     */
    notifyMediumFindings?: boolean;
    /**
     * Notify of completed scans.
     */
    notifyScanCompleted?: boolean;
    /**
     * Notify of started scans.
     */
    notifyScanStarted?: boolean;
    /**
     * Slack notification webhook url.
     */
    webhookUrl?: string;
}
