import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInstanceObjectRequest extends SpeakeasyBase {
    /**
     * string to search for in contributor of model
     */
    contributor?: string;
    id: string;
    /**
     * string to search for in title of model
     */
    title?: string;
}
export declare class GetInstanceObjectResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associations?: shared.Association[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
