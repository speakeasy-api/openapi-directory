import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePlanRequestBody extends SpeakeasyBase {
    amount?: number;
    currency?: string;
    intervalDay?: number;
    title?: string;
}
export declare class UpdatePlanRequest extends SpeakeasyBase {
    requestBody?: UpdatePlanRequestBody;
    planId: string;
}
export declare class UpdatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
