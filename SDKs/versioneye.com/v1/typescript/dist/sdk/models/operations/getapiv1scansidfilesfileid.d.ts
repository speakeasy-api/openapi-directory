import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV1ScansIdFilesFileIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetApiV1ScansIdFilesFileIdRequest extends SpeakeasyBase {
    fileId: string;
    id: string;
    perPage?: string;
}
export declare class GetApiV1ScansIdFilesFileIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
