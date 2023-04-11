import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemCreatePublicTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemPublicTokenCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
