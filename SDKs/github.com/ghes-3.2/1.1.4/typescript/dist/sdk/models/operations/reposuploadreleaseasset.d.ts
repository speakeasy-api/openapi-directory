import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ReposUploadReleaseAssetServerList: readonly ["https://uploads.github.com"];
export declare class ReposUploadReleaseAssetRequest extends SpeakeasyBase {
    requestBody?: string;
    label?: string;
    name: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the release.
     */
    releaseId: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUploadReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response for successful upload
     */
    releaseAsset?: shared.ReleaseAsset;
}
