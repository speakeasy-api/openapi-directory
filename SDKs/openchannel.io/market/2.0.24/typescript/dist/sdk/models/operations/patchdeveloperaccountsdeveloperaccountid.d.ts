import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The id of the developer account to be updated
     */
    developerAccountId: string;
    /**
     * The id of the developer that this account belongs to
     */
    developerId: string;
    /**
     * The contact email address
     */
    email?: string;
    /**
     * The name for the account
     */
    name?: string;
}
export declare class PatchDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
