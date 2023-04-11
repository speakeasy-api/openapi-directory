import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDependentRequest extends SpeakeasyBase {
    dependentCreateRequest: shared.DependentCreateRequest;
    /**
     * The unique identifier of the employee in Noyo
     */
    employeeId: string;
}
export declare class CreateDependentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Dependent
     */
    dependentResult?: shared.DependentResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
