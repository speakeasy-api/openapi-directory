import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReligionFullSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ReligionFullRequest extends SpeakeasyBase {
    countryIso2: string;
    personalNameFull: string;
    subDivisionIso31662: string;
}
export declare class ReligionFullResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A religion-coded name.
     */
    personalNameReligionedOut?: shared.PersonalNameReligionedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
