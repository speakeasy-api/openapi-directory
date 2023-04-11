import { SpeakeasyBase } from "../../../internal/utils";
import { Options } from "./options";
/**
 * CollectionOverride allows resource handling overrides for specific resources within a BaseType
 */
export declare class CollectionOverride extends SpeakeasyBase {
    /**
     * The collection that identifies this resource within its service.
     */
    collection?: string;
    /**
     * Options allows customized resource handling by Deployment Manager.
     */
    options?: Options;
}
