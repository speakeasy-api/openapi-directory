import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notebook instance configurations that can be updated.
 */
export declare class InstanceConfig extends SpeakeasyBase {
    /**
     * Verifies core internal services are running.
     */
    enableHealthMonitoring?: boolean;
    /**
     * Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
     */
    notebookUpgradeSchedule?: string;
}
