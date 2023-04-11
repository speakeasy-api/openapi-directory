import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEvidenceGraphTableRequest extends SpeakeasyBase {
    /**
     * association id, e.g. 68e686f6-d05b-46b8-ab1f-1da2fff97ada
     */
    id: string;
    /**
     * If true, considers dc:source as edge
     */
    isPublication?: boolean;
}
export declare class GetEvidenceGraphTableResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
