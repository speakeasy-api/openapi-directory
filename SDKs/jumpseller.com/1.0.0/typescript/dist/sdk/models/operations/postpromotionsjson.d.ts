import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostPromotionsJsonRequest extends SpeakeasyBase {
    /**
     * Promotion parameters.
     */
    promotionEdit: shared.PromotionEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostPromotionsJsonResponse extends SpeakeasyBase {
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
