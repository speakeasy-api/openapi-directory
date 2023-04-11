import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IndicesRequest extends SpeakeasyBase {
    endDate?: string;
    exchanges?: string;
    limit?: string;
    lowCap?: string;
    startDate?: string;
    timeHorizon?: string;
}
export declare class IndicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
