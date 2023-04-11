import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Response format
 */
export declare enum TransportationIncentivesLawsIdOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class TransportationIncentivesLawsIdRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * The 'true' value returns a record no matter its status (current, expired, archived, or repealed). The default 'false' value returns only current laws and incentives.
     */
    expired?: boolean;
    /**
     * The id of the law that you are searching
     */
    id: number;
    /**
     * Response format
     */
    outputFormat: TransportationIncentivesLawsIdOutputFormatEnum;
    /**
     * Include points of contacts in the return value.
     */
    poc?: boolean;
}
export declare class TransportationIncentivesLawsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
