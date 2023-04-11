import { SpeakeasyBase } from "../../../internal/utils";
export declare class JiraStatusMapping extends SpeakeasyBase {
    /**
     * Id of the Jira status that `accepted` findings should be mapped to.
     */
    accepted?: string;
    /**
     * Id of the Jira status that `fixed` findings should be mapped to.
     */
    fixed?: string;
    /**
     * Id of the Jira status that `invalid` findings should be mapped to.
     */
    invalid?: string;
    /**
     * Id of the Jira status that `notfixed` findings should be mapped to.
     */
    notfixed?: string;
}
