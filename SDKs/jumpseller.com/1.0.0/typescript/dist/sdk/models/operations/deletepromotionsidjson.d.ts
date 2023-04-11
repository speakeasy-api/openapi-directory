import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeletePromotionsIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Promotion
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class DeletePromotionsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Promotion Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deletePromotionsIdJSON200ApplicationJSONString?: string;
}
