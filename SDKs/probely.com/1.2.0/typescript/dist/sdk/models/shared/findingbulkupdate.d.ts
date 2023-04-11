import { SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { FindingSeverityEnum } from "./findingseverityenum";
import { FindingStateEnum } from "./findingstateenum";
export declare class FindingBulkUpdateInput extends SpeakeasyBase {
    /**
     * Assigned user
     */
    assignee?: Assignee;
    /**
     * User comment left on the finding.
     */
    comment?: string;
    /**
     * Array of finding ids
     */
    ids: string[];
    /**
     * User labels for the finding.
     */
    labels?: string[];
    /**
     * Severity, how serious the issue is considered:
     *
     * @remarks
     *   * 10 - low
     *   * 20 - medium
     *   * 30 - high
     *
     */
    severity?: FindingSeverityEnum;
    /**
     * Finding state:
     *
     * @remarks
     *   * notfixed - Issue can still be exploited
     *   * invalid - Issue determined to be a false positive
     *   * accepted - Issue will not be solved and the risk was accepted
     *   * fixed - No problem here anymore
     *
     */
    state?: FindingStateEnum;
}
