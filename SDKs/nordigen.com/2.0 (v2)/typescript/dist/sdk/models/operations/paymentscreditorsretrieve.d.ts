import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PaymentsCreditorsRetrieveRequest extends SpeakeasyBase {
    id: string;
}
export declare class PaymentsCreditorsRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    creditorAccount?: shared.CreditorAccount;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
