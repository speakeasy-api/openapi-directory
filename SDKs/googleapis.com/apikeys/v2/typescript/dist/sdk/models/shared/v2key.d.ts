import { SpeakeasyBase } from "../../../internal/utils";
import { V2Restrictions } from "./v2restrictions";
/**
 * The representation of a key managed by the API Keys API.
**/
export declare class V2Key extends SpeakeasyBase {
    annotations?: Record<string, string>;
    createTime?: string;
    deleteTime?: string;
    displayName?: string;
    etag?: string;
    keyString?: string;
    name?: string;
    restrictions?: V2Restrictions;
    uid?: string;
    updateTime?: string;
}
/**
 * The representation of a key managed by the API Keys API.
**/
export declare class V2KeyInput extends SpeakeasyBase {
    annotations?: Record<string, string>;
    displayName?: string;
    restrictions?: V2Restrictions;
}
