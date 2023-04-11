import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCheckSecurity extends SpeakeasyBase {
    apiKey: string;
}
/**
 * Describes the background check priority. The amount of high priority checks is limited by country. Medium priority is used by default
 */
export declare enum CreateCheckTruoraPriorityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}
export declare class CreateCheckRequest extends SpeakeasyBase {
    /**
     * Request body create a background check
     */
    createCheckInput: shared.CreateCheckInput;
    /**
     * Describes the background check priority. The amount of high priority checks is limited by country. Medium priority is used by default
     */
    truoraPriority?: CreateCheckTruoraPriorityEnum;
}
export declare class CreateCheckResponse extends SpeakeasyBase {
    /**
     * Click to view/hide response structure
     */
    checkOutput?: shared.CheckOutput;
    contentType: string;
    /**
     * Validation error, at least one of the parameters was invalid.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
