import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReportBehaviorSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ReportBehaviorResponse extends SpeakeasyBase {
    behaviourOutput?: shared.BehaviourOutput;
    contentType: string;
    /**
     * Error uploading the items
     */
    errors?: shared.ErrorT[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
