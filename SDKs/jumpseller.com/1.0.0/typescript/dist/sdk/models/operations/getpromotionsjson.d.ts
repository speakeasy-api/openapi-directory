import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPromotionsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Promotions' list restriction (default: 50 | max: 200).
     */
    limit?: number;
    /**
     * API OAuth login.
     */
    login: string;
    /**
     * Promotions' list page (default: 1).
     */
    page?: number;
}
export declare class GetPromotionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Promotions
     */
    promotions?: shared.Promotion[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
