import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLibrarySecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetLibraryRequest extends SpeakeasyBase {
    all?: boolean;
    eventLogUuid?: string;
    limit?: number;
    offset?: string;
    organizationUuid: string;
}
export declare class GetLibraryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * List of library items
     */
    libraryResponse?: shared.LibraryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
