import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllImageUrlsSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetAllImageUrlsRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllImageUrlsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of all image urls
     */
    libraryImagesResponse?: shared.LibraryImagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
