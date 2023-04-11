import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1ScansIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetApiV1ScansIdRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetApiV1ScansIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
