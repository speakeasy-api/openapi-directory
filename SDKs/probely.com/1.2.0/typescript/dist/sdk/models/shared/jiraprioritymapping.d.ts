import { SpeakeasyBase } from "../../../internal/utils";
export declare class JiraPriorityMapping extends SpeakeasyBase {
    /**
     * Id of the Jira priority that low severity findings should be mapped to.
     */
    ten?: string;
    /**
     * Id of the Jira priority that medium severity findings should be mapped to.
     */
    twenty?: string;
    /**
     * Id of the Jira status that high severity findings should be mapped to.
     */
    thirty?: string;
}
