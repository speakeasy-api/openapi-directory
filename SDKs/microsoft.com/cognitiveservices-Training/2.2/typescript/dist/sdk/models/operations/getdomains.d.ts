import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainsRequest extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    domains?: shared.Domain[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
