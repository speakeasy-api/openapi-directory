import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPolicyModuleRequest extends SpeakeasyBase {
    /**
     * The name of a policy module
     */
    id: string;
    /**
     * If true, response will be in a human-readable format.
     */
    pretty?: boolean;
}
export declare class GetPolicyModuleResponse extends SpeakeasyBase {
    /**
     * Success
     */
    twoHundredResult?: shared.TwoHundredResult;
    /**
     * Server error
     */
    fourHundred?: shared.FourHundred;
    /**
     * Not found (for example, a requested policy module or document does not exist)
     */
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
