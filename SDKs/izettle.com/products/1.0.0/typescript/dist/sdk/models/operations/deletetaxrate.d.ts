import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTaxRateSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class DeleteTaxRateRequest extends SpeakeasyBase {
    taxRateUuid: string;
}
export declare class DeleteTaxRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
