import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PutQshowRequest extends SpeakeasyBase {
    /**
     * Qshow description
     */
    description?: string;
    /**
     * Tags for the qshow
     */
    tags?: string[];
    /**
     * Qshow title
     */
    title: string;
}
export declare class PutQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
