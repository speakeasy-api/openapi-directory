import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EurekaInfoRequest extends SpeakeasyBase {
    nonce: number;
    options: string;
    params: string;
}
export declare class EurekaInfoResponse extends SpeakeasyBase {
    contentType: string;
    example1?: shared.Example1;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
