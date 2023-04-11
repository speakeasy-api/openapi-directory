import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteApiV2CddriveFilesFileIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class DeleteApiV2CddriveFilesFileIdRequest extends SpeakeasyBase {
    /**
     * The ID of the file to access.
     */
    fileId: number;
}
export declare class DeleteApiV2CddriveFilesFileIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
