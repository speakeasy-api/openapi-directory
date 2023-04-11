import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveSiteSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveSiteRequest extends SpeakeasyBase {
    /**
     * UUID or name of the site to remove
     */
    siteId: string;
}
export declare class RemoveSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
