import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FilesVersionsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the file from which you want to retrieve versions.
     */
    fileId: string;
}
/**
 * The properties of the file versions entity.
 */
export declare class FilesVersionsFileVersionAttributes extends SpeakeasyBase {
    /**
     * MIME content-type for the file (null if unavailable).
     */
    contentType?: Record<string, any>;
    /**
     * The date of the file version creation, as an iso8601 formatted timestamp.
     */
    dateCreated?: Date;
    /**
     * Size of the file in bytes.
     */
    size?: number;
}
/**
 * Links to alternative representations of the file version entity.
 */
export declare class FilesVersionsFileVersionLinks extends SpeakeasyBase {
    /**
     * A link to the html version page.
     */
    html?: string;
    /**
     * A link to the detail page for a file version.
     */
    self?: string;
}
export declare class FilesVersionsFileVersion extends SpeakeasyBase {
    /**
     * The properties of the file versions entity.
     */
    attributes?: FilesVersionsFileVersionAttributes;
    /**
     * The identifier of the file version.
     */
    id?: string;
    /**
     * Links to alternative representations of the file version entity.
     */
    links?: FilesVersionsFileVersionLinks;
    /**
     * The type identifier of the file versions entity (`file_versions`).
     */
    type?: string;
}
export declare class FilesVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
