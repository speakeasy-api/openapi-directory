import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the Pull method.
 */
export declare class PullRequest extends SpeakeasyBase {
    /**
     * If this is specified as true the system will respond immediately even if it is not able to return a message in the Pull response. Otherwise the system is allowed to wait until at least one message is available rather than returning FAILED_PRECONDITION. The client may cancel the request if it does not wish to wait any longer for the response.
     */
    returnImmediately?: boolean;
    /**
     * The subscription from which a message should be pulled.
     */
    subscription?: string;
}
