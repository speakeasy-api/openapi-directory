import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutPolicyModuleRequest extends SpeakeasyBase {
    requestBody: string;
    /**
     * The name of a policy module
     */
    id: string;
    /**
     * If true, compiler performance metrics will be returned in the response.
     */
    metrics?: boolean;
    /**
     * If true, response will be in a human-readable format.
     */
    pretty?: boolean;
}
export declare class PutPolicyModuleResponse extends SpeakeasyBase {
    /**
     * Success
     */
    twoHundredResult?: shared.TwoHundredResult;
    /**
     * Bad request
     */
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
