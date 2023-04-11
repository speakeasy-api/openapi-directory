import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchDevelopersDeveloperIdRequest extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The id of the developer to be located
     */
    developerId: string;
    /**
     * The developer's email
     */
    email?: string;
    /**
     * The developer's name
     */
    name?: string;
    /**
     * The type for this developer
     */
    type?: string;
    /**
     * The developer's username
     */
    username?: string;
}
export declare class PatchDevelopersDeveloperIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
