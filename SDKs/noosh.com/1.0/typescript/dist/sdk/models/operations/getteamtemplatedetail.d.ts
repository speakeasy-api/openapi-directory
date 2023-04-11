import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamTemplateDetailRequest extends SpeakeasyBase {
    teamTemplateId: string;
    workgroupId: string;
}
export declare class GetTeamTemplateDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Internal server error
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful retrieval
     */
    teamTemplateExpandVO?: shared.TeamTemplateExpandVO;
}
