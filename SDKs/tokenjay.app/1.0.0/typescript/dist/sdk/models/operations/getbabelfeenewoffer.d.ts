import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBabelFeeNewOfferResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getBabelFeeNewOffer400WildcardString?: string;
    /**
     * Unauthorized
     */
    getBabelFeeNewOffer401WildcardString?: string;
    /**
     * Not Found
     */
    getBabelFeeNewOffer404WildcardString?: string;
    /**
     * Conflict
     */
    getBabelFeeNewOffer409WildcardString?: string;
}
