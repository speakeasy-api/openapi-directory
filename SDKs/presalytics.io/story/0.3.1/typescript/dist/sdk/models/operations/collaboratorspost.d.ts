import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollaboratorsPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Array of all possible permission types
     */
    permissionTypes?: shared.PermissionType[];
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
}
