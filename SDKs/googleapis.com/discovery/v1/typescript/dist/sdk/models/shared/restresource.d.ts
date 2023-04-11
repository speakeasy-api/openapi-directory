import { SpeakeasyBase } from "../../../internal/utils";
import { RestMethod } from "./restmethod";
export declare class RestResource extends SpeakeasyBase {
    /**
     * Methods on this resource.
     */
    methods?: Record<string, RestMethod>;
    /**
     * Sub-resources on this resource.
     */
    resources?: Record<string, RestResource>;
}
