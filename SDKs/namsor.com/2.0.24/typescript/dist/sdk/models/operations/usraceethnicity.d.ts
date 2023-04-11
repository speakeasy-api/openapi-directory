import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsRaceEthnicitySecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class UsRaceEthnicityRequest extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class UsRaceEthnicityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino), AI_AN (American Indian or Alaskan Native*) and PI (Pacific Islander*). *optionally
     */
    firstLastNameUSRaceEthnicityOut?: shared.FirstLastNameUSRaceEthnicityOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
