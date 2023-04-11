import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPromotionsIdJsonRequest extends SpeakeasyBase {
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
export declare class GetPromotionsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Promotion Not Found.
     */
    notFound?: shared.NotFound;
    /**
     * OK
     */
    promotion?: shared.Promotion;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
