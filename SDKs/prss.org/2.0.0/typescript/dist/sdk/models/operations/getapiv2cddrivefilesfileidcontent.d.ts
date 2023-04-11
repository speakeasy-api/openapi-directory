import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2CddriveFilesFileIdContentSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2CddriveFilesFileIdContentRequest extends SpeakeasyBase {
    /**
     * Can be used to limit the range of bytes retrieved. Only a single byte range in the format ```bytes={start-range}-{end-range}``` is supported.
     */
    range?: string;
    /**
     * The ID of the file to download.
     */
    fileId: number;
}
export declare class GetApiV2CddriveFilesFileIdContentResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The file was found and will be returned in the body of the response.
     */
    getApiV2CddriveFilesFileIdContent200ApplicationOctetStreamBinaryString?: Uint8Array;
}
