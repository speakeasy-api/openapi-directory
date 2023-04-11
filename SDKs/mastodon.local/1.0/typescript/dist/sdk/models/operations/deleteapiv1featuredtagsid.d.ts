import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1FeaturedTagsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1FeaturedTagsIdRequest extends SpeakeasyBase {
    /**
     * The id of the FeaturedTag to be unfeatured.
     */
    id: string;
}
export declare class DeleteApiV1FeaturedTagsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If the ID does not exist or is not owned by you
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An empty object will be returned if the featured tag was successfully deleted.
     */
    deleteApiV1FeaturedTagsId200ApplicationJSONObject?: Record<string, any>;
}
