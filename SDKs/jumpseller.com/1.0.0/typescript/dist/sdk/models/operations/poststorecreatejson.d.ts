import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostStoreCreateJsonRequest extends SpeakeasyBase {
    /**
     * New partnered Store parameters.
     */
    partnerStoreCreate: shared.PartnerStoreCreate;
    /**
     * Partner authentication token.
     */
    authToken: string;
    /**
     * Partner code.
     */
    partnerCode: string;
}
export declare class PostStoreCreateJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request.
     */
    partnerError?: shared.PartnerError;
    /**
     * A Partner Store object.
     */
    partnerStoreCode?: shared.PartnerStoreCode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
