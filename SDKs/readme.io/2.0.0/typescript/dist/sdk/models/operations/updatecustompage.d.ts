import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCustomPageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCustomPageRequest extends SpeakeasyBase {
    /**
     * CustomPage object
     */
    customPage: shared.CustomPage;
    /**
     * Slug of custom page
     */
    slug: string;
}
export declare class UpdateCustomPageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
