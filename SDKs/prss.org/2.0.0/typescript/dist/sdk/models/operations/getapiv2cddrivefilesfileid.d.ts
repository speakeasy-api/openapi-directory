import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2CddriveFilesFileIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2CddriveFilesFileIdRequest extends SpeakeasyBase {
    /**
     * The ID of the file to access.
     */
    fileId: number;
}
export declare class GetApiV2CddriveFilesFileIdResponse extends SpeakeasyBase {
    /**
     * The file information.
     */
    cdDriveFile?: shared.CDDriveFile;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
