import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDependentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the dependent in Noyo
     */
    dependentId: string;
}
export declare class GetDependentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns a single Dependent
     */
    dependentResult?: shared.DependentResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
