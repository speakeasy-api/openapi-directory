import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OfferResponse extends SpeakeasyBase {
    contentType: string;
    example12?: shared.Example12;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
