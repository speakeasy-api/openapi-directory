import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCategoryDocsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCategoryDocsRequest extends SpeakeasyBase {
    /**
     * Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"
     */
    slug: string;
    /**
     * Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.
     */
    xReadmeVersion: string;
}
export declare class GetCategoryDocsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
