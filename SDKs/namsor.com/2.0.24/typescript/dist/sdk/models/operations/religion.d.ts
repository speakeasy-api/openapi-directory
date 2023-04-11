import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReligionSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ReligionRequest extends SpeakeasyBase {
    personalNameFull: string;
    subDivisionIso31662: string;
}
export declare class ReligionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A religion-coded name.
     */
    personalNameReligionedOut?: shared.PersonalNameReligionedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
