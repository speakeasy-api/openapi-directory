import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ScenarioAnalysisRequest extends SpeakeasyBase {
    limit?: string;
    tokens?: string;
}
export declare class ScenarioAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
