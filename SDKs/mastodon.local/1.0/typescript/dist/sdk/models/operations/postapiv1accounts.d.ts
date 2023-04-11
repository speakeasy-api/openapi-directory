import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1AccountsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AccountsRequestBody extends SpeakeasyBase {
    /**
     * Whether the user agrees to the local rules, terms, and policies. These should be presented to the user in order to allow them to consent before setting this parameter to TRUE.
     */
    agreement: boolean;
    /**
     * The email address to be used for login
     */
    email: string;
    /**
     * The language of the confirmation email that will be sent
     */
    locale: string;
    /**
     * The password to be used for login
     */
    password: string;
    /**
     * Text that will be reviewed by moderators if registrations require manual approval.
     */
    reason?: string;
    /**
     * The desired username for the account
     */
    username: string;
}
export declare class PostApiV1AccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
