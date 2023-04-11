import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchQshowSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PatchQshowRequest extends SpeakeasyBase {
    /**
     * Qshow description
     */
    description?: string;
    /**
     * Qshow ID
     */
    id: string;
    /**
     * Tags for the qshow
     */
    tags?: string[];
    /**
     * Qshow title
     */
    title?: string;
}
export declare class PatchQshowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
