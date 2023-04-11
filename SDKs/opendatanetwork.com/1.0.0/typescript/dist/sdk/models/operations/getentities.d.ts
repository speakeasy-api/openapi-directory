import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEntitiesRequest extends SpeakeasyBase {
    /**
     * e.g. cQovpGcdUT1CSzgYk0KPYdAI0
     */
    xAppToken?: string;
    /**
     * The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be
     *
     * @remarks
     * used with your request. The `app_token` parameter is required if an app token is not passed via the `X-App-Token` HTTP header. Clients must [register for their own app tokens](https://dev.socrata.com/docs/app-tokens.html).
     */
    appToken?: string;
    /**
     * ID of the entity.
     */
    entityId?: string;
    /**
     * Name of the entity.
     */
    entityName?: string;
    /**
     * Type of the entity.
     */
    entityType?: string;
}
export declare class GetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
