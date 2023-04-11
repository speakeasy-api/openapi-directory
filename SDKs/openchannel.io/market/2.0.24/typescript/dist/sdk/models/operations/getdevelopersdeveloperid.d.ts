import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDevelopersDeveloperIdRequest extends SpeakeasyBase {
    /**
     * The id of the developer to be located
     */
    developerId: string;
}
export declare class GetDevelopersDeveloperIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
