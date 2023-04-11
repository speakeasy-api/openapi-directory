import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of relation to find.
 */
export declare enum FindTheRelativesOfAnEntityRelationEnum {
    Parent = "parent",
    Child = "child",
    Sibling = "sibling",
    Peer = "peer"
}
export declare class FindTheRelativesOfAnEntityRequest extends SpeakeasyBase {
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
     * ID of the target entity.
     */
    entityId: string;
    /**
     * Maximum number of entities in each group.
     *
     * @remarks
     * Must be an integer from 1 to 1000.
     */
    limit?: number;
    /**
     * The type of relation to find.
     */
    relation: FindTheRelativesOfAnEntityRelationEnum;
    /**
     * If this parameter is included, only entities with data for the given
     *
     * @remarks
     * variable will be returned. Note that this may cause the number of
     * entities returned to be less than the specified `limit`.
     */
    variableId?: string;
}
export declare class FindTheRelativesOfAnEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
