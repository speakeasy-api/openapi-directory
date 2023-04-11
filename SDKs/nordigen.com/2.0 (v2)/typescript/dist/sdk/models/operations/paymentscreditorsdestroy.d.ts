import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentsCreditorsDestroyRequest extends SpeakeasyBase {
    id: string;
}
export declare class PaymentsCreditorsDestroyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
