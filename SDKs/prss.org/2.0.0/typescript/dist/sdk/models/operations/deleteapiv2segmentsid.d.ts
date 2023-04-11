import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV2SegmentsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class DeleteApiV2SegmentsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class DeleteApiV2SegmentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to delete the segment.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
