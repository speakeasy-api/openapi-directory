import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemPublicTokenExchangeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemPublicTokenExchangeResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
