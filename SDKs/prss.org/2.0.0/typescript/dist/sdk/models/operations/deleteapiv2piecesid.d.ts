import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV2PiecesIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class DeleteApiV2PiecesIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class DeleteApiV2PiecesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
