import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDevelopersDeveloperIdRequest extends SpeakeasyBase {
    /**
     * The id of the developer to be removed
     */
    developerId: string;
}
export declare class DeleteDevelopersDeveloperIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
