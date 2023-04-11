import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchDocsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SearchDocsRequest extends SpeakeasyBase {
    /**
     * Search string to look for
     */
    search: string;
    /**
     * Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
     */
    xReadmeVersion: string;
}
export declare class SearchDocsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
