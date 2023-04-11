import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersIsTriangleSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersIsTriangleRequest extends SpeakeasyBase {
    /**
     * Number to check
     */
    number?: number;
}
export declare class GetNumbersIsTriangleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
