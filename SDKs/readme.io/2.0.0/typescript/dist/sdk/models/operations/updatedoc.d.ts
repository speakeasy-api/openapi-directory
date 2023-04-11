import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDocSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDocRequest extends SpeakeasyBase {
    /**
     * Doc object
     */
    doc: shared.Doc;
    /**
     * Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"
     */
    slug: string;
    /**
     * Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
     */
    xReadmeVersion: string;
}
export declare class UpdateDocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
