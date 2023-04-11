import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CorridorSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CorridorRequest extends SpeakeasyBase {
    countryIso2From: string;
    countryIso2To: string;
    firstNameFrom: string;
    firstNameTo: string;
    lastNameFrom: string;
    lastNameTo: string;
}
export declare class CorridorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Two classified names.
     */
    corridorOut?: shared.CorridorOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
