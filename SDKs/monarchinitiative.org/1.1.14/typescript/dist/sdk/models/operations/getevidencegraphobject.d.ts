import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEvidenceGraphObjectRequest extends SpeakeasyBase {
    /**
     * association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada
     */
    id: string;
}
export declare class GetEvidenceGraphObjectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    graphs?: shared.Graph[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
