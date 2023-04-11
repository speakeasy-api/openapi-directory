import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1ScansSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetApiV1ScansRequest extends SpeakeasyBase {
    name?: string;
    perPage?: string;
}
export declare class GetApiV1ScansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
