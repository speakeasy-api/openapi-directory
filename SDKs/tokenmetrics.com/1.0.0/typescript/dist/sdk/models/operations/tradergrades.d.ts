import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TraderGradesRequest extends SpeakeasyBase {
    endDate?: string;
    limit?: string;
    startDate?: string;
    tokens?: string;
}
export declare class TraderGradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
