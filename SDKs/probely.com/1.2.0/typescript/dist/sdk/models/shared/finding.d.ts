import { SpeakeasyBase } from "../../../internal/utils";
import { Assignee } from "./assignee";
import { ChangedBy } from "./changedby";
import { Definition } from "./definition";
import { FindingInsertionPointEnum } from "./findinginsertionpointenum";
import { FindingSeverityEnum } from "./findingseverityenum";
import { FindingStateEnum } from "./findingstateenum";
import { MethodEnum } from "./methodenum";
import { Reporter } from "./reporter";
import { Requests } from "./requests";
import { TargetSimple } from "./targetsimple";
/**
 * Event object.
 */
export declare class Finding extends SpeakeasyBase {
    /**
     * Assigned user
     */
    assignee?: Assignee;
    /**
     * Date time of the last change
     */
    changed?: Date;
    /**
     * User that last modified the object
     */
    changedBy?: ChangedBy;
    /**
     * User comment left on the finding.
     */
    comment?: string;
    /**
     * CVSS score
     */
    cvssScore?: number;
    /**
     * CVSS vector
     */
    cvssVector?: string;
    definition?: Definition;
    /**
     * Evidence for the finding.
     */
    evidence?: string;
    /**
     * Extra data for the finding.
     */
    extra?: string;
    /**
     * Fix sugestion for the vulnerability and framework
     */
    fix?: string;
    /**
     * Object id.
     */
    id?: string;
    /**
     * An insertion point is the place in the HTTP request where the
     *
     * @remarks
     * malicious payload is injected to exploit the vulnerability.
     *   * cookie - Payload injected into the value of an HTTP cookie
     *   * header - Payload injected into the header of an HTTP request
     *   * parameter - Payload injected into the value of a query string
     *   parameter
     *   * arbitrary_url_param - Payload injected into the value of an
     *   arbitrarily added query string parameter
     *   * url_filename - Payload injected into the URL filename part
     *   * url_folder - Payload injected into the URL folder part
     *   * multipart_parameter - Payload is inserted into the value of a
     *   parameter attribute within a multi-part message body (such as
     *   the name of an uploaded file).
     *   * <empty> - No payload to inject.
     *
     */
    insertionPoint?: FindingInsertionPointEnum;
    /**
     * User labels for the finding.
     */
    labels?: string[];
    /**
     * Date time of the last time the vulnerability was found.
     */
    lastFound?: Date;
    /**
     * HTTP method
     */
    method?: MethodEnum;
    /**
     * Vulnerable paramenter.
     */
    parameter?: string;
    /**
     * Request parameters
     */
    params?: string;
    /**
     * Finding path.
     */
    path?: string;
    /**
     * Reporting user
     */
    reporter?: Reporter;
    /**
     * Request response pairs that produced the finding
     */
    requests?: Requests[];
    /**
     * Scan ids where this finding was present.
     */
    scans?: string[];
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
    target?: TargetSimple;
    /**
     * Full finding URL
     */
    url?: string;
    /**
     * Value for parameter.
     */
    value?: string;
}
