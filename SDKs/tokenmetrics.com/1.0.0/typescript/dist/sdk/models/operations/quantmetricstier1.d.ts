import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuantmetricsTier1Request extends SpeakeasyBase {
    date?: string;
    limit?: string;
    tokens?: string;
}
export declare class QuantmetricsTier1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
