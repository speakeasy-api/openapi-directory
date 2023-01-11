import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInfoInfoGetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    infoResponse?: shared.InfoResponse;
    statusCode: number;
}
