import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEvidenceByIdRequest extends SpeakeasyBase {
    /**
     * Internal unique ID of the evidence string to retrieve.
     */
    id: string;
}
export declare class GetEvidenceByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
