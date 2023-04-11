import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDeveloperAccountsDeveloperAccountIdRequest extends SpeakeasyBase {
    /**
     * The id of the developer account to be updated
     */
    developerAccountId: string;
}
export declare class DeleteDeveloperAccountsDeveloperAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
