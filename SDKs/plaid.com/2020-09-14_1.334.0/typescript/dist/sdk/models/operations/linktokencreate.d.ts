import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LinkTokenCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    linkTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
