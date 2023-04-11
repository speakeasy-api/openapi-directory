import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UdpateIndexRequestBody extends SpeakeasyBase {
    primaryKey?: string;
}
export declare class UdpateIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
