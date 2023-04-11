import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class DeleteQshowRequest extends SpeakeasyBase {
    /**
     * Qshow ID
     */
    id: string;
}
export declare class DeleteQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
