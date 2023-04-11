import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDiscountSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class DeleteDiscountRequest extends SpeakeasyBase {
    discountUuid: string;
    organizationUuid: string;
}
export declare class DeleteDiscountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
