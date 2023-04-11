import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQshowRequest extends SpeakeasyBase {
    /**
     * Qshow ID
     */
    id: string;
}
export declare class GetQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
