import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LinkTokenGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    linkTokenGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
