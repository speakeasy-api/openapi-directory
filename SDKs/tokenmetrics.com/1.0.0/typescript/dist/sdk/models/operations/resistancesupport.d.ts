import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResistanceSupportRequest extends SpeakeasyBase {
    endDate?: string;
    limit?: string;
    startDate?: string;
    tokens?: string;
}
export declare class ResistanceSupportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
