import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { Options } from "./options";
/**
 * BaseType that describes a service-backed Type.
 */
export declare class BaseType extends SpeakeasyBase {
    /**
     * Allows resource handling overrides for specific collections
     */
    collectionOverrides?: CollectionOverride[];
    /**
     * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
     */
    credential?: Credential;
    /**
     * Descriptor Url for the this type.
     */
    descriptorUrl?: string;
    /**
     * Options allows customized resource handling by Deployment Manager.
     */
    options?: Options;
}
