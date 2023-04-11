import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CastegroupIndianFullSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CastegroupIndianFullRequest extends SpeakeasyBase {
    personalNameFull: string;
    subDivisionIso31662: string;
}
export declare class CastegroupIndianFullResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A castegroup-coded name.
     */
    personalNameCastegroupOut?: shared.PersonalNameCastegroupOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
