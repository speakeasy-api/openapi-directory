import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetpersonsawaySecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class SetpersonsawayRequest extends SpeakeasyBase {
    /**
     * ID of the Home you're interested in
     */
    homeId: string;
    /**
     * If a person_id is specified, that person will be set as 'Away'. If no person_id is specified, the Home will be set as 'Empty'.
     */
    personId?: string;
}
export declare class SetpersonsawayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomePersonsAwayResponse?: shared.NAWelcomePersonsAwayResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
