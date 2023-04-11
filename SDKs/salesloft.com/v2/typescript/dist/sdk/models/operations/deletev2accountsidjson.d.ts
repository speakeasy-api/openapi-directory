import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2AccountsIdJsonRequest extends SpeakeasyBase {
    /**
     * Account ID
     */
    id: string;
}
export declare class DeleteV2AccountsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
