import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetpersonshomeSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class SetpersonshomeRequest extends SpeakeasyBase {
    /**
     * ID of the Home you're interested in
     */
    homeId: string;
    /**
     * List of persons IDs
     */
    personIds: string;
}
export declare class SetpersonshomeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naWelcomePersonsHomeResponse?: shared.NAWelcomePersonsHomeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
