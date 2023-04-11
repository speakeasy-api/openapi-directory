import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditDependentRequest extends SpeakeasyBase {
    dependentEditRequest: shared.DependentEditRequest;
    /**
     * The unique identifier of the employee in Noyo
     */
    dependentId: string;
    /**
     * The current version identifier of the dependent
     */
    version: string;
}
export declare class EditDependentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Dependent
     */
    dependentResult?: shared.DependentResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
