import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentsCreditorsCreateMultipartResponse extends SpeakeasyBase {
    contentType: string;
    creditorAccountWrite?: shared.CreditorAccountWrite;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
