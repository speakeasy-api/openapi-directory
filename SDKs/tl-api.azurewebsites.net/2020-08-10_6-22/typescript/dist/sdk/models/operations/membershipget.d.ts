import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MembershipGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * API Response with all Members entity as a list.
     */
    memberDTOS?: shared.MemberDTO[];
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
