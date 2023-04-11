import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Response format
 */
export declare enum TransportationIncentivesLawsPocsOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class TransportationIncentivesLawsPocsRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    apiKey: string;
    /**
     * Return the points of contact for the given Jurisdiction. Jurisdiction must be given as a two character state code (eg, 'CO' for Colorado). A single jurisdiction, or a comma-separate list of multiple jurisdiction, may be given.  Use the code 'US' for federal laws and the code 'DC' for Washington D.C.
     */
    jurisdiction: string;
    /**
     * Response format
     */
    outputFormat: TransportationIncentivesLawsPocsOutputFormatEnum;
}
export declare class TransportationIncentivesLawsPocsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
