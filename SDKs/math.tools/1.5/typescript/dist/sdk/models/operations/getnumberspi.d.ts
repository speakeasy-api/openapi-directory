import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumbersPiSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: string;
}
export declare class GetNumbersPiRequest extends SpeakeasyBase {
    /**
     * Optional start position
     */
    from?: number;
    /**
     * Optional start position
     */
    to?: number;
}
export declare class GetNumbersPiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
