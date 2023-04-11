import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveMerchantSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveMerchantRequest extends SpeakeasyBase {
    /**
     * The ID of the merchant to retrieve. If the string "me" is supplied as the ID,
     *
     * @remarks
     * then retrieve the merchant that is currently accessible to this call.
     */
    merchantId: string;
}
export declare class RetrieveMerchantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveMerchantResponse?: shared.RetrieveMerchantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
