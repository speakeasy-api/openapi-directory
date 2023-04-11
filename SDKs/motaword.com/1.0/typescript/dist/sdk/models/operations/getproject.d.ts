import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProjectWithEnum {
    Client = "client",
    Vendor = "vendor",
    Score = "score"
}
export declare class GetProjectRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
    /**
     * Include detailed information. Possible values 'client', 'vendor', 'score'
     */
    with?: GetProjectWithEnum[];
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Project model
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
