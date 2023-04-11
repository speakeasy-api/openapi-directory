import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuantmetricsTier2Request extends SpeakeasyBase {
    date?: string;
    limit?: string;
    tokens?: string;
}
export declare class QuantmetricsTier2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
