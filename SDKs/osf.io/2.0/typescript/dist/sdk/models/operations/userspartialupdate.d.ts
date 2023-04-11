import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The properties of the user entity.
 */
export declare class UsersPartialUpdateUserAttributesInput extends SpeakeasyBase {
    /**
     * The family name of the user, used for bibliographic citations.
     */
    familyName?: string;
    /**
     * The full name of the user, used for display on the OSF.
     */
    fullName: string;
    /**
     * The given name of the user, used for bibliographic citations.
     */
    givenName?: string;
    /**
     * The user's locale, e.g. 'en_US'.
     */
    locale?: string;
    /**
     * The middle names of the user, used for bibliographic citations.
     */
    middleNames?: string;
    /**
     * The suffix of the user, used for bibliographic citations.
     */
    suffix?: string;
    /**
     * The user's timezone, e.g. 'Etc/UTC'.
     */
    timezone?: string;
}
export declare class UsersPartialUpdateUserInput extends SpeakeasyBase {
    /**
     * The properties of the user entity.
     */
    attributes: UsersPartialUpdateUserAttributesInput;
}
export declare class UsersPartialUpdateRequest extends SpeakeasyBase {
    requestBody: UsersPartialUpdateUserInput;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
export declare class UsersPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
