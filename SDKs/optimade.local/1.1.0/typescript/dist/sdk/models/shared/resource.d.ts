import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Resource Links object
**/
export declare class ResourceResourceLinks extends SpeakeasyBase {
    self?: any;
}
/**
 * Resource objects appear in a JSON API document to represent resources.
**/
export declare class Resource extends SpeakeasyBase {
    attributes?: Record<string, any>;
    id: string;
    links?: ResourceResourceLinks;
    meta?: Record<string, any>;
    relationships?: Record<string, any>;
    type: string;
}
