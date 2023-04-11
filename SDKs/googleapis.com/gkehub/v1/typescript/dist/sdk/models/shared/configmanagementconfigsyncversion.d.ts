import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specific versioning information pertaining to ConfigSync's Pods
 */
export declare class ConfigManagementConfigSyncVersion extends SpeakeasyBase {
    /**
     * Version of the deployed admission_webhook pod
     */
    admissionWebhook?: string;
    /**
     * Version of the deployed git-sync pod
     */
    gitSync?: string;
    /**
     * Version of the deployed importer pod
     */
    importer?: string;
    /**
     * Version of the deployed monitor pod
     */
    monitor?: string;
    /**
     * Version of the deployed reconciler-manager pod
     */
    reconcilerManager?: string;
    /**
     * Version of the deployed reconciler container in root-reconciler pod
     */
    rootReconciler?: string;
    /**
     * Version of the deployed syncer pod
     */
    syncer?: string;
}
