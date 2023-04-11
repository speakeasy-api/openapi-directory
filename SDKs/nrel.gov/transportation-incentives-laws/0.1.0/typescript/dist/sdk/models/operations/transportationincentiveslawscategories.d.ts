import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Response format
 */
export declare enum TransportationIncentivesLawsCategoriesOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
/**
 * Search by the category type.
 */
export declare enum TransportationIncentivesLawsCategoriesTypeEnum {
    Tech = "tech",
    User = "user",
    Regulation = "regulation",
    Incentive = "incentive"
}
export declare class TransportationIncentivesLawsCategoriesRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * Response format
     */
    outputFormat: TransportationIncentivesLawsCategoriesOutputFormatEnum;
    /**
     * Search by the category type.
     */
    type?: TransportationIncentivesLawsCategoriesTypeEnum;
}
export declare class TransportationIncentivesLawsCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
