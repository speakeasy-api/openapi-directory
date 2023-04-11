import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdRequestBody extends SpeakeasyBase {
    /**
     * Whether the user wishes to have all monetary values converted to their base currency.
     */
    alwaysShowBaseCurrency?: boolean;
    /**
     * A new base currency code for the user.
     */
    baseCurrencyCode?: string;
    /**
     * Whether the user is a beta user, and wishes to try out new features.
     */
    betaUser?: boolean;
    /**
     * A new email address for the user.
     */
    email?: string;
    /**
     * A new name for the user.
     */
    name?: string;
    /**
     * A new time zone for the user.
     */
    timeZone?: string;
    /**
     * The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.
     */
    weekStartDay?: number;
}
export declare class PutUsersIdRequest extends SpeakeasyBase {
    requestBody?: PutUsersIdRequestBody;
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class PutUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    user?: shared.User;
}
