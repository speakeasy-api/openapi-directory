import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsInfoTextPatternRequest extends SpeakeasyBase {
    /**
     * Text pattern to search for (minimum of 3 characters length).
     */
    textPattern: string;
}
export declare class GetOfferingsInfoTextPatternResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * Offerings
     */
    portfolioActivations?: shared.PortfolioActivations[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
